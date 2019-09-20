import React, { Component } from "react";
import { gestionnaireEvents } from "../gameplay/inventory.dir/inventoryEvents";

class Character {
    constructor(username) {//username should be unique
        this.stats = {
            Life: 0,
            Atk: 0,
            Def: 0,
            Dodge: 0,
            Critical: 0,
            Gold: 0,
            MaxLife: 150,
            BaseLife: 150,
            BaseAtk: 15,
            BaseDef: 10,
            BaseDodge: 0,
            BaseCritical: 0,
            Username: username,
            get Alive() {
                return this.Life > 0
            },
        };
        this.modifyCurentStat = this.modifyCurentStat.bind(this);




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
        gestionnaireEvents.on(`improve-${this.stats.Username}-stat`, this.modifyCurentStat)
        gestionnaireEvents.on(`getStat-${this.stats.Username}-stat`, this.getStat)
    }
    modifyCurentStat(stat, value) {
        if (this.stats.keys().index(stat) !== -1) {
            this.stats[`${stat}`] += value
            return true;
        }
        else { return false };
    }
    getStat(stat) {
        if (this.stats.keys().index(stat) !== -1) {
            return this.stats[`${stat}`];
        }
        else { return false };
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