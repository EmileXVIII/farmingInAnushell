
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
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-changeObject`,(newObject)=>{this.changeObject(newObject.rarity)});
        gestionnaireEvents.on(`${this.props.conteneurName}-${this.props.numKey}-deleateObject`,(newObject)=>{this.changeObject(undefined)});
    }
    changeRarity(newRarity){
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
        this.setState((prevState)=>({
            filter_rarity:filterRarity
        }))
        }

    render() {
        return (
            <div className={`filter ${this.state.filter_rarity}`}></div>
        )
    }
}
export default Filter;