import Equipement from "../Equipement"

class Shield extends Equipement {
    constructor(name, ...props) {
        super(...props)
        this.infos.name = name
        this.infos.type = 'Shield'
    }
}

export default Shield