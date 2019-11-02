import Character from './Character.js'

class Monster extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = 150
        this.stats.Atk = this.stats.BaseAtk + 20
        this.stats.Def = this.stats.BaseDef
        this.stats.Dodge = 50
        this.stats.Critical = 50

        this.skills.push({ Name: 'Bite', Power: 1.2, Img: "/img/skillbite.gif" }, { Name: 'Magic wand', Power: 1.2, Img: "/img/skillpd.gif" })
    }
}

export default Monster