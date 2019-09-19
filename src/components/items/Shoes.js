import React, { Component } from "react";
import Item from './Item.js'
import Equipement from './Equipement'

class Shoes extends Equipement {
    constructor(name, props) {
        super(props)
        this.infos.name = name
        this.infos.image = 'http://pixelartmaker.com/art/63862e153250ee3.png'
    }
}

export default Shoes