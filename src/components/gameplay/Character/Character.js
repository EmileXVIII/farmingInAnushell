import React, { Component } from "react";
import Inventaire from "./list-inventaire";

class Character extends Component {
    // constructor() {
    //     super()
    // }

    handleClickHelmet = () => {
        const div = document.getElementById("list-inventaire")
        div.appendChild(<Inventaire />)
    }
    handleClickChest = () => {

    }
    handleClickMainHand = () => {

    }
    handleClickLegs = () => {

    }
    handleClickBoots = () => {

    }
    handleClickOffHand = () => {

    }

    render() {
        return (
            <div id="Character">
                <h3 className="text-center">Character</h3>
                <div class="character">
                    <div className="list-equip">
                        <div onClick={this.handleClickHelmet} className="objet helmet"></div>
                        <div onClick={this.handleClickChest} className="objet chest"></div>
                        <div onClick={this.handleClickMainHand} className="objet mainhand"></div>
                    </div>
                    <div class="element-character"></div>
                    <div className="list-equip">
                        <div onClick={this.handleClickLegs} className="objet legs"></div>
                        <div onClick={this.handleClickBoots} className="objet boots"></div>
                        <div onClick={this.handleClickOffHand} className="objet offhand"></div>
                    </div>
                </div>
                <div id="list-inventaire">
                </div>
            </div>
        )
    }
}

export default Character