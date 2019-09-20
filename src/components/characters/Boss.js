import Character from './Character'

class Boss extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = 1000
        this.stats.Atk = 60
        this.stats.Def = 60
        this.stats.Dodge = 100
        this.stats.Crit = 100
        this.skills.push({Name: 'Fireball', Power: 1.3, Img: "/img/skillfireball.png"}, {Name: 'Ice spear', Power: 1.4, Img: "/img/skillwind.png"})
    }
}

export default Boss