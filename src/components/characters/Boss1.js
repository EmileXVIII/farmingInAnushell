import Character from './Character'

class Boss1 extends Character {
    constructor(username) {
        super(username)
        this.stats.BaseLife = 1000
        this.stats.Life = this.stats.BaseLife
        this.stats.Atk = 60
        this.stats.Def = 60
        this.stats.Dodge = 100
        this.stats.Crit = 100
        this.stats.Img = '/img/boss.gif'
        this.skills.shift()
        this.skills.shift()
        this.skills.push({Name: 'Burn !', Power: 1.3, Img: "/img/skillfire.gif"}, {Name: 'Fireball', Power: 1.4, Img: "/img/skillfire2.gif"}, {Name: 'Fire army', Power: 1.4, Img: "/img/skillfire3.gif"})
    }
}

export default Boss1