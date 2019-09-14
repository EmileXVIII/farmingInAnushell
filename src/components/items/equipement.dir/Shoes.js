import Equipement from "../Equipement"

class Shoes extends Equipement {
    constructor(name, ...props) {
        super(...props)
        this.infos.name = name
        this.infos.type = 'Shoes'
    }
}

export default Shoes