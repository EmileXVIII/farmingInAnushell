import Equipement from '../Equipement.js'

class Leggings extends Equipement {
    constructor(name, ...props) {
        super(...props)
        this.infos.name = name
        this.infos.type = 'Leggings'
    }
}

export default Leggings