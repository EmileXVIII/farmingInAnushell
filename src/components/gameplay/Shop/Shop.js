import React, { Component } from "react";
import { directive } from "@babel/types";
import { Button } from 'reactstrap';
import Icon from '@material-ui/core/Icon';


class Shop extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div id="Shop">
                <header>
                    <Button color="warning" onClick={this.refreshShop} ><Icon>refresh</Icon></Button>
                </header>
                <div id="Description">
                    <h4 className="text-center">Nom Objet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum finibus lectus quis convallis. Nunc eget imperdiet metus. Duis cursus semper blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum finibus lectus quis convallis. Nunc eget imperdiet metus. Duis cursus semper blandit.</p>
                </div>
                <div className="list-objet">
                    <div className="objet"></div>
                    <div className="objet"></div>
                    <div className="objet"></div>
                    <div className="objet"></div>
                    <div className="objet"></div>
                    <div className="objet"></div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}

export default Shop