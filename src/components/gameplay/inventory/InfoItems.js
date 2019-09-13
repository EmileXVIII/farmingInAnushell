import { gestionnaireEvents } from "./inventoryEvents";
import React, { Component } from "react";

class InfoItems extends Component {
    constructor() {
        super();
        this.state = {
            objetSurvole: undefined,
            clear: false
        }
        this.treatObject = this.treatObject.bind(this);
        this.clear=this.clear.bind(this)
    }
    componentDidMount() {
        document.addEventListener('mouseover', (event) => this.treatObject(event.target));
        document.addEventListener('mouseout', (event) => this.clear(event.target));
    }
    componentWillUnmount() {
        document.removeEventListener('mouseover', (event) => this.treatObject(event.target));
        document.removeEventListener('mouseout', (event) => this.clear(event.target));
    }
    treatObject(slot) {
        if (slot.nodeName==='#document'){return}
        //console.log(slot);
        let i=0;
        while (i<2 && slot.className.split(" ").indexOf('objet') === -1){
            i++;
            slot=slot.parentNode
            if (slot.nodeName==='#document'){return}
            //console.log('inWhile',slot);
        }
        if (i<2) {
            //console.log(true);
            let object = gestionnaireEvents.emit(`${slot.parentNode.attributes.name.nodeValue}-${slot.attributes.numkey.nodeValue}-getObject`)
            this.setState((prevState) => ({ objetSurvole: object }
                ))
        }
    }
    clear(slot) {
        if (slot.nodeName==='#document'){return}
        //console.log(slot.className.split(" "));
        let i=0;
        while (i<2 && slot.className.split(" ").indexOf('objet') === -1){
            i++;
            slot=slot.parentNode;
            if (slot.nodeName==='#document'){return}
            //console.log('inWhile',slot);
        }
        if (i<2) {
            //console.log("I'm in");
            this.setState((prevState) => ({ objetSurvole: undefined, clear: true }))
        }
    }
    render() {
        //console.log('monObjet',this.state.objetSurvole)
        if (this.state.clear === true || !this.state.objetSurvole) {
            this.state.clear = false;
            return (
                <div name='infoItems'>
                    {`Rien à afficher`}
                </div>
            )

        }
        else if (this.state.objetSurvole.pieceEquipement !== undefined) {
            return (
                <div name='infoItems'>
                    {`Name:${this.state.objetSurvole.name}`}<br/>{`
                    Rarity:${this.state.objetSurvole.rarity}`}<br/><br/>{`
                    Life:${this.state.objetSurvole.stats['pv']}`}<br/>{`
                    Att:${this.state.objetSurvole.stats['att']}`}<br/>{`
                    Def:${this.state.objetSurvole.stats['def']}`}<br/>{`
                    Dodge:${this.state.objetSurvole.stats['esq']}`}<br/>{`
                    Critical:${this.state.objetSurvole.stats['critical']}`}
                </div>
            )
        }
        else {
            return (
                <div name='infoItems'>
                    {`Name:${this.state.objetSurvole.name}`}<br/>{`
                    Rarity:${this.state.objetSurvole.rarity}`}<br/><br/>{`
                    Effect's description:${this.state.objetSurvole.descriptionEffect}`}
                </div>
            )

        }
    }
}
export default InfoItems