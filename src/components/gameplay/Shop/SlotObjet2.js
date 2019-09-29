import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Button } from 'reactstrap';
import { inventoryEquipementSaver, inventoryExpendableSaver, arrayItems, arrayShop } from "../../../App.js"

class SlotObjet2 extends Component {
    constructor(props) {
        super(props)
        this.element = ""
        this.state = {
            item: arrayShop[1],
        }
    }

    Desc = () => {
        const div = document.getElementById("Shop-Description")
        this.element = (
            <div>
                <h4>{this.state.item.infos.name}</h4>
                <p>{this.state.item.infos.description}</p>
                <p>Atk :{this.state.item.atk}</p>
                <p>Def :{this.state.item.def}</p>
                <p>Crit :{this.state.item.critical}</p>
                <p>Dodge :{this.state.item.dodge}</p>
                <p>Life :{this.state.item.life}</p>
                <p>Rarity :{this.state.item.infos.rarity}</p>
            </div>
        )
        ReactDOM.render(this.element, div)
    }

    toggleHover = () => {
        if (this.state.item) {
            this.Desc()
        }
    }

    toggleClear = () => {
        const div = document.getElementById("Shop-Description")
        this.element = ""
        ReactDOM.render(this.element, div)
    }

    affichage = () => {
        if (this.state.item) {
            return (
                <Button onClick={() => this.buyItem()} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="object">
                    <h6>{this.state.item.infos.name}</h6>
                    <img width='30px' src={this.state.item.infos.iconAdresse} alt="Item" />
                    <br /><br /><br />
                    <p className="cost" >{this.state.item.infos.cost} <img src="img/CoinIcon.png" alt="Coin Icon" width="20" height="20" /></p>
                </Button>
            )
        }
    }

    buyItem = () => {
        if (this.props.checkIfBuyable(this.state.item.infos.cost)) {
            this.props.buyItem(this.state.item.infos.cost, this.state.item.infos.name)
            const item = this.state.item
            if (item.type) inventoryEquipementSaver.addOnFreePlace(item);
            else inventoryExpendableSaver.addOnFreePlace(item);
            this.setState({
                item: "",
            })
            const div = document.getElementById("Shop-Description")
            this.element = ""
            ReactDOM.render(this.element, div)
        }
        arrayShop[1] = ""
    }

    render() {
        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="object">
                {this.affichage()}
            </div>
        )
    }
}

export default SlotObjet2