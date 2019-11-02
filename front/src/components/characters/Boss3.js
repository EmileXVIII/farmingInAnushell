import Character from './Character'

class Boss3 extends Character {
    constructor(username) {
        super(username)
        this.stats.BaseLife = 10000
        this.stats.Life = this.stats.BaseLife
        this.stats.Atk = 250
        this.stats.Def = 250
        this.stats.Dodge = 250
        this.stats.Crit = 250
        this.stats.Img = '/img/boss3.gif'
        this.skills.shift()
        this.skills.shift()
        this.skills.push({Name: 'Dark Bob', Power: 1.4, Img: "/img/skilljerem.gif"}, {Name: 'Ca avance vos projets ?', Power: 1.4, Img: "/img/skilljerem2.gif"}, {Name: 'Le petit dej de Jerem', Power: 1.5, Img: "/img/skilljerem3.gif"})
    }
}

export default Boss3