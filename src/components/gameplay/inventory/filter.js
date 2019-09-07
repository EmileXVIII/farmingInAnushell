import React, { Component } from "react";
class Filter extends Component {
    constructor() {
        super()
        this.state={
            rarity:'filter_empty'
        };
        this.changeRarity=this.changeRarity.bind(this)
    }
    changeRarity(newRarity){
        let filterRarity;
        newRarity=newRarity.toLowerCase()
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
            rarity:filterRarity
        }))
        }

    render() {
        return (
            <div className={`filter ${this.state.rarity}`}></div>
        )
    }
}
export default Filter;