import Item from './Item.js'
import Equipement from './Equipement'

class Helmet extends Equipement {
    constructor(name, props) {
        super(props)
        this.infos.name = name
        this.infos.image = 'https://art.pixilart.com/4cace868c94ee16.png'
    }
}

export default Helmet