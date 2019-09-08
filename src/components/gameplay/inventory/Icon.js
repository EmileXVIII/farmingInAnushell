import React, { Component } from "react";
class Icon extends Component {
    constructor() {
        super()
        this.state={
            icon: false
        };
        this.changeRarity=this.changeRarity.bind(this)
    }
    changeIcon(newIcon){
        this.setState((prevState)=>({
            icon:filterRarity
        }))
        }

    render() {
        return (
            <div className={`filter ${this.state.rarity}`}></div>
        )
    }
}
export default Filter;