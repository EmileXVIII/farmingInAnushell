import React, { Component } from "react";
import Item from './Item.js'

class Breastplate extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
        this.stats.Image = 'https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/defense_protect_armor_plate_hero-512.png'
    }
}

export default Breastplate