import React, { Component } from "react";
import Item from './Item.js'

class Shoes extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
        this.stats.Image = 'http://pixelartmaker.com/art/63862e153250ee3.png'
    }
}

export default Shoes