import React, { Component } from "react";
import Character from './Character.js'
import Helmet from '../items/Helmet.js'

class Player extends Character {
    constructor() {
        super()
        this.stats.Life = 100
        this.stats.Atk = 10
        this.stats.Def = 10 
    }
}

export default Player