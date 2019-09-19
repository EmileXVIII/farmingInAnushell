import { gestionnaireEvents, getionnaireSelectionObjet } from "./inventoryEvents";
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
    componentDidUpdate(){
        getionnaireSelectionObjet.message=undefined
    }
    render() {
        //console.log('monObjet',this.state.objetSurvole)
        if (this.state.clear === true || !this.state.objetSurvole) {
            this.state.clear = false;
            if ( getionnaireSelectionObjet.message)
            return (
                <div name='infoItems'>
                    {`${getionnaireSelectionObjet.message}`}
                </div>
            )
            return (
                <div name='infoItems'>
                    {`Rien à afficher`}
                </div>
            )

        }
        else if (this.state.objetSurvole.infos.type !== undefined) {
            return (
                <div name='infoItems'>
                    {`Name:${this.state.objetSurvole.infos.name}`}<br/>{`
                    Rarity:${this.state.objetSurvole.infos.rarity}`}<br/><br/>{`
                    Life:${this.state.objetSurvole['life']}`}<br/>{`
                    Att:${this.state.objetSurvole['atk']}`}<br/>{`
                    Def:${this.state.objetSurvole['def']}`}<br/>{`
                    Dodge:${this.state.objetSurvole['dodge']}`}<br/>{`
                    Critical:${this.state.objetSurvole['critical']}`}
                </div>
            )
        }
        else {
            return (
                <div name='infoItems'>
                    {`Name:${this.state.objetSurvole.infos.name}`}<br/>{`
                    Rarity:${this.state.objetSurvole.infos.rarity}`}<br/><br/>{`
                    Effect's description:${this.state.objetSurvole.descriptionEffect}`}
                </div>
            )

        }
    }
}
export default InfoItems