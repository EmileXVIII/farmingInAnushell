import Character from './Character'

class Boss3 extends Character {
    constructor(username) {
        super(username)
        this.stats.BaseLife = 2000
        this.stats.Life = this.stats.BaseLife
        this.stats.Atk = 100
        this.stats.Def = 100
        this.stats.Dodge = 130
        this.stats.Crit = 130
        this.stats.Img = '/img/boss3.png'
        this.skills.shift()
        this.skills.shift()
        this.skills.push({Name: 'Spear', Power: 1.4, Img: "/img/skillspear.png"})
    }
}

export default Boss3