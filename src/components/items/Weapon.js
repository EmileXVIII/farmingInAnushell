import React, { Component } from "react";
import Item from './Item.js'

class Weapon extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
        this.stats.Image = 'https://art.pixilart.com/661f9bda0e9b95e.png'
    }
}

export default Weapon