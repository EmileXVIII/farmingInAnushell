
import React, { Component } from "react";
import { gestionnaireEvents } from "./inventoryEvents";
import Filter from "./Filter";
class InventoryObject extends Component {
    constructor(props) {
        super()
        this.state = {
            rarity: undefined,
            object: undefined,
            urlIcon: undefined,
            classAditionnelle: '',
        };
        this.props = props
        this.changeObject = this.changeObject.bind(this);
        this.deleateObject = this.deleateObject.bind(this);
        this.setBackground=this.setBackground.bind(this);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-changeObject`, this.changeObject);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-deleateObject`, this.deleateObject);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-getObject`, () => this.state.object);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-addClass`, () => this.addClass);
        //gestionnaireEvents.on(`setBackground`,this.setBackground);
    }
    setBackground(cheminFichier='https://miro.medium.com/max/4000/1*pLv5AsM5VSBMHwPQK6RuEA.jpeg',numKey) {
       //this.setState((prevState) => {
        setTimeout(()=>{
        let equipementDivSlot = document.getElementsByClassName(`${this.props.conteneurName}`)[0].children[numKey].getElementsByClassName('icon_objet')[0];//.getElementsByClassName('icon_objet')[0];
        debugger;
        equipementDivSlot.style.background = `url(${cheminFichier})`;
        equipementDivSlot.style.backgroundSize = "80px";
        equipementDivSlot.style.backgroundRepeat = "no-repeat"
        },0)
        //;return{}})
        

    }
    //componentDidMount(){//appeler afterRender/
      //  this.setBackground('https://miro.medium.com/max/4000/1*pLv5AsM5VSBMHwPQK6RuEA.jpeg',1);
    //}
    changeObject(newObject) {
        this.setState((prevState) => ({ object: newObject, rarity: newObject.rarity, urlIcon: newObject.iconAdresse, classAditionnelle: '' }))
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