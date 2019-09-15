import React, { Component } from 'react'
import Character from './Character.js'

class Monster extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = 100
        this.stats.Atk = this.stats.BaseAtk
        this.stats.Def = this.stats.BaseDef
    }
    
}

export default Monster