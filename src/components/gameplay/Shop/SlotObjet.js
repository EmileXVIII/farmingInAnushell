import React, { Component } from "react";
import { directive } from "@babel/types";
import { Button } from 'reactstrap';
import Icon from '@material-ui/core/Icon';

class SlotObjet extends Component {
    constructor(props, item) {
        super(props)
        this.state = {
            hover: false,
            item: item,
        }
    }

    toggleHover = () => {
        const div = document.getElementById("Shop-Description")
        div.prepend("test")
    }
    toggleClear = () => {

    }

    render() {
        return (
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleClear} className="objet">
                <p>Test</p>
            </div>
        )
    }
}

export default SlotObjet