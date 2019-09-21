import Character from './Character'

class Boss2 extends Character {
    constructor(username) {
        super(username)
        this.stats.BaseLife = 1500
        this.stats.Life = this.stats.BaseLife
        this.stats.Atk = 80
        this.stats.Def = 80
        this.stats.Dodge = 120
        this.stats.Crit = 120
        this.stats.Img = '/img/boss2.png'
        this.skills.shift()
        this.skills.shift()
        this.skills.push({Name: 'Throw skull', Power: 1.4, Img: "/img/skilldeath.png"}, {Name: 'Death scythe', Power: 1.5, Img: "/img/skillscythe.png"}, {Name: 'Ghost army', Power: 1.3, Img: "/img/skillghost.png"})
    }
}

export default Boss2