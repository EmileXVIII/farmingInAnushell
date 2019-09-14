import Equipement from "../Equipement"

class Weapon extends Equipement {
    constructor(name, ...props) {
        super(...props)
        this.infos.name = name
        this.infos.type = 'Weapon'
    }
}

export default Weapon