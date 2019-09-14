import Item from './Item.js'

class Helmet extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
    }
}

export default Helmet