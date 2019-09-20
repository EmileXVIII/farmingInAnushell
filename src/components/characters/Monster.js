import React, { Component } from 'react'
import Character from './Character.js'

class Monster extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = 100
        this.stats.Atk = this.stats.BaseAtk + 20
        this.stats.Def = this.stats.BaseDef
        this.stats.Dodge = 50
        this.stats.Critical = 50
    }
}

export default Monster