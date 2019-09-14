import React, { Component } from "react";
import Item from './Item.js'

class Shoes extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
    }
}

export default Shoes