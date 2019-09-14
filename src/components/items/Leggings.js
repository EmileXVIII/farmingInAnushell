import Item from './Item.js'

class Leggings extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
    }
}

export default Leggings