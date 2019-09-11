import React, { Component } from "react";
import { directive } from "@babel/types";
import { Button } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import Helmet from '../../items/Helmet'

class SlotObjet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "oui",
        }
    }



    toggleHover = () => {
        const div = document.getElementById("Shop-Description")
        div.innerHTML = ""
        div.prepend(this.state.item)
    }

    toggleClear = () => {
        const div = document.getElementById("Shop-Description")
        div.innerHTML = ""
    }

    render() {
        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="objet">

            </div>
        )
    }
}

export default SlotObjet