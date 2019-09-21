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
        this.stats.Img = '/img/boss.png'
        this.skills.shift()
        this.skills.shift()
        this.skills.push({Name: 'Fireball', Power: 1.3, Img: "/img/skillfireball.png"}, {Name: 'Ice spear', Power: 1.4, Img: "/img/skillwind.png"}, {Name: 'Fire ghost', Power: 1.4, Img: "/img/skillfireghost.png"})
    }
}

export default Boss1