import Equipement from '../Equipement.js'

class Helmet extends Equipement {
    constructor(name, ...props) {
        super(...props)
        this.infos.name = name
        this.infos.type = 'Helmet'
    }
}

export default Helmet