import React, { Component } from "react";
import Item from './Item.js'
import Equipement from './Equipement'

class Breastplate extends Equipement {
    constructor(name, props) {
        super(props)
        this.infos.name = name
        this.infos.image = 'https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/defense_protect_armor_plate_hero-512.png'
    }
}

export default Breastplate