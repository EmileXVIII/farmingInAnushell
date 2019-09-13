import React, { Component } from "react";
import { Button } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import ListSlot from "./ListSlot";

class Shop extends Component {
    constructor() {
        super()
        this.refreshShop = this.refreshShop.bind(this);
        this.id = 0
        this.state = {
            list: [this.id],
        }
    }

    refreshShop = () => {
        this.id += 1
        const newlist = [this.id]

        this.setState({
            list: newlist
        })
    }

    render() {

        let listobjet = this.state.list.map((idtab) => (<ListSlot key={idtab} />))

        return (
            <div id="Shop">
                <header>
                    <Button color="warning" onClick={this.refreshShop} ><Icon>refresh</Icon><p className="cost" >1<img src="img/CoinIcon.png" alt="Coin Icon" width="20" height="20" /></p></Button>
                </header>
                <div id="Shop-Description">
                </div>
                {listobjet}
                <div className="clear"></div>
            </div>
        )
    }
}

export default Shop