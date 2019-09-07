import React, { Component } from "react";
import Character from './Character.js'

class Monster extends Character {
    constructor() {
        super()
        this.stats.Life = 80
        this.stats.Atk = 10
        this.stats.Def = 10 
    }
}

export default Monster