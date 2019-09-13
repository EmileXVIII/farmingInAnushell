import Character from './Character'
import Helmet from '../items/Helmet.js'

class Player extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = 100000
        this.stats.Atk = 1000
        this.stats.Def = 10

        this.skills.push({Name: 'Fireball', Power: 4})
    }
}

export default Player