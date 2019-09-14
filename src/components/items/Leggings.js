import Item from './Item.js'

class Leggings extends Item {
    constructor(name, props) {
        super(props)
        this.stats.Name = name
        this.stats.Image = 'https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/c/c7/Birthday_Suit_Pants_Skin.png'
    }
}

export default Leggings