import React, { Component } from "react";
import Item from './Item.js'
import Equipement from './Equipement'

class Shield extends Equipement {
    constructor(name, props) {
        super(props)
        this.infos.name = name
        this.infos.image = 'https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/shield_protect_weapon_defense_gold_hero-512.png'
    }
}

export default Shield