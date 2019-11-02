import { gestionnaireEvents } from "../gameplay/inventory.dir/inventoryEvents";

class Character {
    constructor(username) {//username should be unique
        this.stats = {
            Maxlife: 0,
            Life: 0,
            Atk: 0,
            Def: 0,
            Dodge: 0,
            Critical: 0,
            Gold: 0,
            Xp: 0,
            Level: 1,
            BaseAtk: 15,
            BaseDef: 10,
            BaseDodge: 0,
            BaseCritical: 0,
            BaseLife: 200,
            Username: username,
            Img: null,
            get Alive() {
                return this.Life > 0
            },
        };
        this.Username = username;
        this.modifyCurentStat = this.modifyCurentStat.bind(this);
        this.getStat = this.getStat.bind(this)




        this.skills = []

        gestionnaireEvents.on(`improve-${this.Username}-stat`, this.modifyCurentStat)
        gestionnaireEvents.on(`getStat-${this.Username}-stat`, this.getStat)
    }
    modifyCurentStat(stat, value) {
        if (Object.keys(this.stats).indexOf(stat) !== -1) {
            this.stats[`${stat}`] += value;
            gestionnaireEvents.emit('updateStateGamePage')
            return true;
        }
        else { return false };
    }
    getStat(stat) {
        if (Object.keys(this.stats).indexOf(stat) !== -1) {
            return this.stats[`${stat}`];
        }
        else { return false };
    }

    Attack(Character) {
        const skillUsed = this.skills[this.randomInt(this.skills.length)]
        const dmgInflicted = Math.round(skillUsed.Power * this.stats.Atk - (Character.stats.Def / 15))
        const checkIfDodged = this.randomInt(1001)
        const checkIfCrit = this.randomInt(1001)
        if (checkIfDodged > Character.stats.Dodge) {
            if (checkIfCrit > this.stats.Critical) {
                gestionnaireEvents.emit('displaySkill', skillUsed.Img)
                setTimeout(() => gestionnaireEvents.emit('displaySkill', ''), 1000)
                Character.stats.Life -= dmgInflicted
                return this.stats.Username + ': ' + skillUsed.Name + ' used ! ' + dmgInflicted + ' damage inflicted ! '
            }
            gestionnaireEvents.emit('displaySkill', skillUsed.Img)
            setTimeout(() => gestionnaireEvents.emit('displaySkill', ''), 1000)
            Character.stats.Life -= dmgInflicted * 2
            return this.stats.Username + ': ' + skillUsed.Name + ' used ! Critical hit ! ' + dmgInflicted * 2 + ' damage inflicted ! '
        }
        else {
            gestionnaireEvents.emit('displaySkill', "/img/skillmiss.png")
            setTimeout(() => gestionnaireEvents.emit('displaySkill', ''), 1000)
            return this.stats.Username + ' : You missed miserably...'
        }
    }

    randomInt(Max) {
        return Math.floor(Math.random() * Max)

    }
}

export default Character