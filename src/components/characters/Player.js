import Character from './Character'

class Player extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = this.stats.BaseLife
        this.stats.Maxlife = this.stats.BaseLife
        this.stats.Atk = this.stats.BaseAtk
        this.stats.Def = this.stats.BaseDef

        this.skills.push({Name: 'Fireball', Power: 1.3, Img: "/img/skillfireball.gif"}, {Name: 'Ice spear', Power: 1.3, Img: "/img/skillice.gif"}, {
            Name: 'Uppercut',
            Power: 1.1,
            Img: "/img/skillpunch.gif"
        },
        {
            Name: 'Kick',
            Power: 1.2,
            Img: "/img/skillkick.gif"
        })
    }
}

export default Player