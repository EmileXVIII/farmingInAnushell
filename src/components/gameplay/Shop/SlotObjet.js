import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Helmet from '../../items/Helmet'
import Leggins from '../../items/Leggings'
import Breastplate from '../../items/Breastplate'
import Shield from '../../items/Shield'
import Shoes from '../../items/Shoes'
import Weapon from '../../items/Weapon'
import { Button } from 'reactstrap';
import { inventoryEquipementSaver } from "../../../App.js"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class SlotObjet extends Component {
    constructor(props) {
        super(props)
        this.element = ""
        this.state = {
            item: this.generate(),
        }
    }

    generate() {
        const rand = getRandomIntInclusive(1, 6)
        if (rand === 1) {
            return new Helmet("Helmet")
        }
        else if (rand === 2) {
            return new Leggins("Legs")
        }
        else if (rand === 3) {
            return new Shield("Shield")
        }
        else if (rand === 4) {
            return new Shoes("Boots")
        }
        else if (rand === 5) {
            return new Weapon("Sword")
        }
        else if (rand === 6) {
            return new Breastplate("Breast")
        }
    }

    Desc = () => {
        const div = document.getElementById("Shop-Description")
        this.element = (
            <div>
                <h4>{this.state.item.stats.Name}</h4>
                <p>{this.state.item.stats.Description}</p>
                <p>Atk :{this.state.item.stats.Atk}</p>
                <p>Def :{this.state.item.stats.Def}</p>
                <p>Crit :{this.state.item.stats.Critical}</p>
                <p>Dodge :{this.state.item.stats.Dodge}</p>
                <p>Life :{this.state.item.stats.Life}</p>
            </div>
        )
        ReactDOM.render(this.element, div)
    }

    toggleHover = () => {
        if (this.state.item !== "") {
            this.Desc()
        }
    }

    toggleClear = () => {
        const div = document.getElementById("Shop-Description")
        this.element = ""
        ReactDOM.render(this.element, div)
    }

    affichage = () => {
        if (this.state.item !== "") {
            return (
                <Button onClick={() => this.props.buyItem(this.state.item.stats.Cost, this.state.item.stats.Name)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="object">
                    <h6>{this.state.item.stats.Name}</h6>
                    <p className="cost" >{this.state.item.stats.Cost} <img src="img/CoinIcon.png" alt="Coin Icon" width="20" height="20" /></p>
                </Button>
            )
        }
    }

    buyItem = () => {
        const item = this.state.item
        let inventoryTab = ""
        setTimeout(() => {
            inventoryTab = inventoryEquipementSaver.objects
        }, 0);
        for (let i = 0; i < inventoryTab.length; i++) {
            if (inventoryTab[i] === undefined) {
                inventoryTab[i] = item
            }
        };
        this.setState({
            item: "",
        })
        const div = document.getElementById("Shop-Description")
        this.element = ""
        ReactDOM.render(this.element, div)
    }

    render() {
        return (
            <div onClick={this.buyItem} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="object">
                {this.affichage()}
            </div>
        )
    }
}

export default SlotObjet