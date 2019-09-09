import React, { Component } from "react";
import { directive } from "@babel/types";
import { Button } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import SlotObjet from './SlotObjet';
import Item from '../../items/Item';

class Shop extends Component {
    constructor() {
        super()
        this.state = {
            items: {},
        }
    }

    refresh = () => {
        // generate 6 randoms items to put in the shop
    }

    render() {
        return (
            <div id="Shop">
                <header>
                    <Button color="warning" onClick={this.refreshShop} ><Icon>refresh</Icon></Button>
                </header>
                <div id="Shop-Description">
                    <h4 className="text-center">Nom Objet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum finibus lectus quis convallis. Nunc eget imperdiet metus. Duis cursus semper blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum finibus lectus quis convallis. Nunc eget imperdiet metus. Duis cursus semper blandit.</p>
                </div>
                <div className="list-objet">
                    <SlotObjet />
                    <SlotObjet />
                    <SlotObjet />
                    <SlotObjet />
                    <SlotObjet />
                    <SlotObjet />
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}

export default Shop