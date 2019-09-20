import React, { Component } from "react";
import { Button } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import ListSlot from "./ListSlot";
import { inventoryEquipementSaver, shopSaver } from "../../../App.js"

class Shop extends Component {
    constructor() {
        super()
        this.refreshShop = this.refreshShop.bind(this);
        this.id = 0
        this.gen = false;
        this.listobjet = ""
        this.state = {
            list: [this.id],
            costRefresh: 15
        }
        
    }

    refreshShop = () => {     
        if (this.props.checkIfBuyable(this.state.costRefresh)) {
            this.props.lostGold(this.state.costRefresh)
            this.gen = true
            this.id += 1
            const newlist = [this.id]

            this.setState({
                list: newlist
            })
        }
    }

    buyItem = (cost, name) => {
        if (this.props.checkIfBuyable(cost)) {
            this.props.lostGold(cost)
            this.props.displayBuying(name)
        }     
    }

    affichageList() {
        if (shopSaver.list === "" || this.gen === true) {
            this.listobjet = this.state.list.map((idtab) => (<ListSlot buyItem={(cost, name) => {this.buyItem(cost, name)}} key={idtab} checkIfBuyable={(cost) =>{return this.props.checkIfBuyable(cost)}}/>))
            this.gen = false
        } else {
            this.gen = false
            this.listobjet = shopSaver.list
        }
    }

        
    componentWillUnmount() {
        shopSaver.list = this.listobjet
    }

    render() {
        this.affichageList()
        
        return (
            <div id="Shop">
                <header>
                    <Button color="warning" onClick={this.refreshShop} ><Icon>refresh</Icon><p className="cost" >{this.state.costRefresh} <img src="img/CoinIcon.png" alt="Coin Icon" width="20" height="20" /></p></Button>
                </header>
                <div id="Shop-Description">
                </div>
                {this.listobjet}
                <div className="clear"></div>
            </div>
        )
    }
}

export default Shop