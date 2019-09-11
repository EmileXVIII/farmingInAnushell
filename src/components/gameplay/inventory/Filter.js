
import React, { Component } from "react";
import { gestionnaireEvents } from "./inventoryEvents";
class Filter extends Component {
    constructor(props) {
        super()
        this.state={
            filter_rarity:'filter_empty'
        };
        this.props=props;
        this.changeRarity=this.changeRarity.bind(this)
        this.changeRarity(undefined);
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-changeObject`,(newObject)=>{this.changeRarity(newObject)});
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-deleateObject`,(newObject)=>{this.changeRarity(undefined)});
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
        if (this.props.numKey===0){console.log('filterRarity0:',filterRarity)}
        this.setState((prevState)=>({
            filter_rarity:filterRarity
        }))
        }

    render() {
        if (this.props.numKey===0){console.log('Renderfilter_rarity0:',this.state.filter_rarity)}
        return (
            <div className={`filter ${this.state.filter_rarity}`}></div>
        )
    }
}
export default Filter;