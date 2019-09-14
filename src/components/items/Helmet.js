import Item from './Item.js'

class Helmet extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
        this.stats.Image = 'https://art.pixilart.com/4cace868c94ee16.png'
    }
}

export default Helmet