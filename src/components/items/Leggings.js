import Item from './Item.js'
import Equipement from './Equipement'

class Leggings extends Equipement {
    constructor(name, props) {
        super(props)
        this.infos.name = name
        this.infos.image = 'https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/c/c7/Birthday_Suit_Pants_Skin.png'
        
    }
}

export default Leggings