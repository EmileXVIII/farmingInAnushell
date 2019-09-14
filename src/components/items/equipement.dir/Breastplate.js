import Equipement from "../Equipement.js";

class Breastplate extends Equipement {
    constructor(name, ...props) {
        super(...props)
        this.infos.name = name
        this.infos.type = 'Brestplate'
    }
}

export default Breastplate