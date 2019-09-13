
import React, { Component } from "react";
import { gestionnaireEvents } from "./inventoryEvents";
class Filter extends Component {
    constructor(props) {
        super()
        this.props=props;
        this.state={
            filter_rarity:this.changeRarity(undefined)
        };
        this.changeRarity=this.changeRarity.bind(this)
        gestionnaireEvents.on(`${this.props.conteneurname}-${this.props.numkey}-changeObject`,(newObject)=>{this.changeRarity(newObject)});
        gestionnaireEvents.on(`${this.props.conteneurname}-${this.props.numkey}-deleateObject`,(newObject)=>{this.changeRarity(undefined)});
    }
    changeRarity(newObject){
        let newRarity
        if (newObject)
         {newRarity=  newObject ? newObject.rarity : undefined; }
        else {newRarity=this.props.rarity}
        let filterRarity;
        if (newRarity){newRarity=newRarity.toLowerCase()}
        switch(newRarity){
            case "common":
                filterRarity='filter_common';
                break
            case "rare":
                filterRarity='filter_rare';
                break
            case "epic":
                filterRarity='filter_epic';
                break
            case "legendary":
                filterRarity='filter_legendary';
                break
            default:
                filterRarity='filter_empty';
                break};
        //if (this.props.numkey===0){console.log('filterRarity0:',filterRarity)}
        this.setState((prevState)=>({
            filter_rarity:filterRarity
        }))
        return filterRarity
        }

    render() {
        //if (this.props.numkey===0){console.log('Renderfilter_rarity0:',this.state.filter_rarity)}
        return (
            <div className={`filter ${this.state.filter_rarity}`}></div>
        )
    }
}
export default Filter;