import Character from './Character'

class Player extends Character {
    constructor(username) {
        super(username)
        this.stats.Life = 150
        this.stats.Atk = 15
        this.stats.Def = 10

        this.skills.push({Name: 'Fireball', Power: 4})
    }
}

export default Player