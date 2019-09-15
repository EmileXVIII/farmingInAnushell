import Character from './Character'
import Helmet from '../items/Helmet.js'

class Player extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = 150
        this.stats.Atk = this.stats.BaseAtk
        this.stats.Def = this.stats.BaseDef

        this.skills.push({Name: 'Fireball', Power: 1.3})
    }
}

export default Player