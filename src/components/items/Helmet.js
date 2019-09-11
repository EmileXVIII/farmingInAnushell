import React, { Component } from "react";
import Item from './Item.js'
import { Divider } from "@material-ui/core";

class Helmet extends Item {
    constructor(props, name) {
        super(props, name)
    }

    render() {

        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Helmet