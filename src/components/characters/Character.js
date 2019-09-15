import React, { Component } from "react";

class Character {
    constructor(username) {
        this.stats = {
            Life: 0,
            Atk: 0,
            Def: 0,
            Dodge: 0,
            Critical: 0,
            Gold: 0,
            BaseAtk: 15,
            BaseDef: 10,
            Username: username,
            get Alive() {
                return this.Life > 0
            },
        };
        

        

        this.skills = [
            {
                Name: 'Uppercut',
                Power: 1.1,
            },
            {
                Name: 'Kick',
                Power: 1.2,
            }
        ]
    }

    Attack(Character) {
        const skillUsed = this.skills[this.randomInt(this.skills.length)]
        const dmgInflicted = Math.round(skillUsed.Power * this.stats.Atk)
        Character.stats.Life -= dmgInflicted
        return this.stats.Username + ': ' + skillUsed.Name + ' used ! ' + dmgInflicted + ' damage inflicted ! '     
    }
    
    randomInt(Max) {
        return Math.floor(Math.random() * Max)

    }
}

export default Character