import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Helmet from '../../items/Helmet'
import Leggings from '../../items/Leggings'
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
        const arrayItem = [new Leggings('Legs'), new Helmet('Helmet'), new Breastplate('Breast'), new Shield('Shield'), new Shoes('Shoes'), new Weapon('Weapon')]
        const rand = getRandomIntInclusive(0, 5)
        return arrayItem[rand]
    }

    Desc = () => {
        const div = document.getElementById("Shop-Description")
        this.element = (
            <div>
                <h4>{this.state.item.infos.name}</h4>
                <p>{this.state.item.infos.description}</p>
                <p>Atk :{this.state.item.stats.atk}</p>
                <p>Def :{this.state.item.stats.def}</p>
                <p>Crit :{this.state.item.stats.critical}</p>
                <p>Dodge :{this.state.item.stats.dodge}</p>
                <p>Life :{this.state.item.stats.life}</p>
                <p>Rarity :{this.state.item.stats.rarity}</p>
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
                <Button onClick={() => this.props.buyItem(this.state.item.infos.cost, this.state.item.infos.name)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="object">
                    <h6>{this.state.item.infos.name}</h6>
                    <img width='45px' src={this.state.item.infos.image}/>
                    <br/><br/><br/>
                    <p className="cost" >{this.state.item.infos.cost} <img src="img/CoinIcon.png" alt="Coin Icon" width="20" height="20" /></p>
                </Button>
            )
        }
    }

    buyItem = () => {
        if (this.state.item !== "") {
            if (this.props.checkIfBuyable(this.state.item.infos.cost)) {
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
        }
        
        
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