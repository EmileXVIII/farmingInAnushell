
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
            rarity: tempObj ? tempObj.infos.rarity : undefined ,
            urlicon: tempObj ? tempObj.infos.iconAdresse : 'none',
            classAditionnelle: '',
        };
        this.changeObject = this.changeObject.bind(this);
        this.deleateObject = this.deleateObject.bind(this);
        this.setBackground=this.setBackground.bind(this);
        gestionnaireEvents.on(`${this.props.conteneurname}-${this.props.numkey}-changeObject`, this.changeObject);
        gestionnaireEvents.on(`${this.props.conteneurname}-${this.props.numkey}-deleateObject`, this.deleateObject);
        gestionnaireEvents.on(`${this.props.conteneurname}-${this.props.numkey}-getObject`, () => this.state.object);
        gestionnaireEvents.on(`${this.props.conteneurname}-${this.props.numkey}-addClass`, () => this.addClass);
        //gestionnaireEvents.on(`setBackground`,this.setBackground);
    }
    chargerObjets(){
        switch (this.props.className){
            case "objet activable_case":
                return inventoryExpendableSaver.objects[this.props.numkey]
            case 'objet equipement_case':
                //console.log('equipement',this.props.numkey,inventoryEquipementSaver.objects[this.props.numkey])
                return inventoryEquipementSaver.objects[this.props.numkey]
            default :return undefined;
        }

    }
    setBackground(cheminFichier='',numkey) {
       //this.setState((prevState) => {
        setTimeout(()=>{
            try{
        let equipementDivSlot = document.getElementsByClassName(`${this.props.conteneurname}`)[0].children[numkey].getElementsByClassName('icon_objet')[0];//.getElementsByClassName('icon_objet')[0];
        equipementDivSlot.style.background = `url(${cheminFichier})`;
        equipementDivSlot.style.backgroundSize = "80px";
        equipementDivSlot.style.backgroundRepeat = "no-repeat"}
        catch(err){}
        },0)
        //;return{}})
        

    }
    componentWillUnmount(){
        gestionnaireEvents.off(`${this.props.conteneurname}-${this.props.numkey}-changeObject`, this.changeObject);
        gestionnaireEvents.off(`${this.props.conteneurname}-${this.props.numkey}-deleateObject`, this.deleateObject);
        gestionnaireEvents.off(`${this.props.conteneurname}-${this.props.numkey}-getObject`, () => this.state.object);
        gestionnaireEvents.off(`${this.props.conteneurname}-${this.props.numkey}-addClass`, () => this.addClass);
    }
    //componentDidMount(){//appeler afterRender/
      //  this.setBackground('https://miro.medium.com/max/4000/1*pLv5AsM5VSBMHwPQK6RuEA.jpeg',1);
    //}
    changeObject(newObject) {
        if (newObject){
        this.setState((prevState) => ({ object: newObject, rarity: newObject.infos.rarity, urlicon: newObject.infos.iconAdresse, classAditionnelle: '' }))
        return newObject}
        else{
            this.setState((prevState) => ({ object: undefined, rarity: undefined, urlicon: undefined, classAditionnelle: '' }))
            return newObject
        }
    }
    deleateObject() {
        this.setState((prevState) => ({ object: undefined, rarity: undefined, urlicon: undefined, classAditionnelle: '' }))
    }
    addClass(nomClass) {
        this.setState((prevState) => ({ classAditionnelle: ` ${nomClass}` }))
    }conteneur_inventaire
    render() {
        return (
            <div className={this.props.className} numkey={this.props.numkey}>
                <div className={(()=>{this.setBackground(this.state.urlicon,this.props.numkey); return `icon_objet${this.state.classAditionnelle}`})()} urlicon={this.state.urlicon} />
                <Filter rarity={this.state.rarity} numkey={this.props.numkey} conteneurname={this.props.conteneurname} />
            </div>
        )
    }
}
export default InventoryObject;