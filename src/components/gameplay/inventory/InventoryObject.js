
import React, { Component } from "react";
import { gestionnaireEvents } from "./inventoryEvents";
import Filter from "./Filter";
import './test';
import { inventoryExpendableSaver, inventoryEquipementSaver } from "../../../App";
class InventoryObject extends Component {
    constructor(props) {
        super();
        this.props = props;
        //console.log('totale',inventoryExpendableSaver,inventoryEquipementSaver);
        let tempObj=this.chargerObjets();
        this.state = {
            object: tempObj ? tempObj : undefined ,
            rarity: tempObj ? tempObj.rarity : undefined ,
            urlIcon: tempObj ? tempObj.iconAdresse : 'none',
            classAditionnelle: '',
        };
        this.changeObject = this.changeObject.bind(this);
        this.deleateObject = this.deleateObject.bind(this);
        this.setBackground=this.setBackground.bind(this);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-changeObject`, this.changeObject);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-deleateObject`, this.deleateObject);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-getObject`, () => this.state.object);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-addClass`, () => this.addClass);
        //gestionnaireEvents.on(`setBackground`,this.setBackground);
    }
    chargerObjets(){
        switch (this.props.className){
            case "objet activable_case":
                return inventoryExpendableSaver.objects[this.props.numKey]
            case 'objet equipement_case':
                //console.log('equipement',this.props.numKey,inventoryEquipementSaver.objects[this.props.numKey])
                return inventoryEquipementSaver.objects[this.props.numKey]
            default :return undefined;
        }

    }
    setBackground(cheminFichier='',numKey) {
       //this.setState((prevState) => {
        setTimeout(()=>{
        let equipementDivSlot = document.getElementsByClassName(`${this.props.conteneurName}`)[0].children[numKey].getElementsByClassName('icon_objet')[0];//.getElementsByClassName('icon_objet')[0];
        equipementDivSlot.style.background = `url(${cheminFichier})`;
        equipementDivSlot.style.backgroundSize = "80px";
        equipementDivSlot.style.backgroundRepeat = "no-repeat"
        },0)
        //;return{}})
        

    }
    componentWillUnmount(){
        gestionnaireEvents.off(`${this.props.conteneurName}-${this.props.numKey}-changeObject`, this.changeObject);
        gestionnaireEvents.off(`${this.props.conteneurName}-${this.props.numKey}-deleateObject`, this.deleateObject);
        gestionnaireEvents.off(`${this.props.conteneurName}-${this.props.numKey}-getObject`, () => this.state.object);
        gestionnaireEvents.off(`${this.props.conteneurName}-${this.props.numKey}-addClass`, () => this.addClass);
    }
    //componentDidMount(){//appeler afterRender/
      //  this.setBackground('https://miro.medium.com/max/4000/1*pLv5AsM5VSBMHwPQK6RuEA.jpeg',1);
    //}
    changeObject(newObject) {
        if (newObject){
        this.setState((prevState) => ({ object: newObject, rarity: newObject.rarity, urlIcon: newObject.iconAdresse, classAditionnelle: '' }))
        return newObject}
        else{
            this.setState((prevState) => ({ object: undefined, rarity: undefined, urlIcon: undefined, classAditionnelle: '' }))
            return newObject
        }
    }
    deleateObject() {
        this.setState((prevState) => ({ object: undefined, rarity: undefined, urlIcon: undefined, classAditionnelle: '' }))
    }
    addClass(nomClass) {
        this.setState((prevState) => ({ classAditionnelle: ` ${nomClass}` }))
    }conteneur_inventaire
    render() {
        return (
            <div className={this.props.className} numKey={this.props.numKey}>
                <div className={(()=>{this.setBackground(this.state.urlIcon,this.props.numKey); return `icon_objet${this.state.classAditionnelle}`})()} urlIcon={this.state.urlIcon} />
                <Filter rarity={this.state.rarity} numKey={this.props.numKey} conteneurName={this.props.conteneurName} />
            </div>
        )
    }
}
export default InventoryObject;