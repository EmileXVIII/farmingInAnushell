import React, { Component } from "react";
import Item from './Item.js'

class Shield extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
        this.stats.Image = 'https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/shield_protect_weapon_defense_gold_hero-512.png'
    }
}

export default Shield