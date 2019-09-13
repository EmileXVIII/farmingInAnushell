import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Helmet from '../../items/Helmet'
import Leggins from '../../items/Leggings'


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



class SlotObjet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: this.generate(),
            element: "",
        }

    }

    generate() {
        const rand = getRandomIntInclusive(1, 20)
        if (rand > 10) {
            return new Helmet("Casque")
        } else {
            return new Leggins("Jambes")
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
        this.Desc()
    }

    toggleClear = () => {
        const div = document.getElementById("Shop-Description")
        this.element = ""
        ReactDOM.render(this.element, div)
    }

    render() {
        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="objet">
                <h6>{this.state.item.stats.Name}</h6>
                <p className="cost" >{this.state.item.stats.Cost}<img src="img/CoinIcon.png" alt="Coin Icon" width="20" height="20" /></p>
            </div>
        )
    }
}

export default SlotObjet