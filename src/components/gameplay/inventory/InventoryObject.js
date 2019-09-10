
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
    setBackground() {
       // this.setState((prevState) => {
        let equipementDivSlot = document.getElementsByClassName(`conteneur_inventaire`)[0].firstChild;
        equipementDivSlot.style.background = "url('https://miro.medium.com/max/4000/1*pLv5AsM5VSBMHwPQK6RuEA.jpeg')";
        equipementDivSlot.style.backgroundSize = "80px";
        equipementDivSlot.style.backgroundRepeat = "no-repeat"
         //   ;return{}})
        

    }
    componentDidMount(){//appeler afterRender
        this.setBackground()
    }
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
                <div className={`icon_objet${this.state.classAditionnelle}`} urlIcon={this.state.urlIcon} />
                <Filter rarity={this.state.rarity} numKey={this.props.numKey} conteneurName={this.props.conteneurName} />
            </div>
        )
    }
}
export default InventoryObject;