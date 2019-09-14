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
        this.state = {
            list: [this.id],
        }
        this.listobjet = ""
    }

    refreshShop = () => {
        this.gen = true
        this.id += 1
        const newlist = [this.id]
        this.setState({
            list: newlist
        })
    }

    affichageList() {
        if (shopSaver.list === "" || this.gen === true) {
            this.listobjet = this.state.list.map((idtab) => (<ListSlot key={idtab} />))
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
                    <Button color="warning" onClick={this.refreshShop} ><Icon>refresh</Icon><p className="cost" >1<img src="img/CoinIcon.png" alt="Coin Icon" width="20" height="20" /></p></Button>
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