import Equipement from '../Equipement.js'

class Leggings extends Equipement {
    constructor(name,iconAdresse='https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/c/c7/Birthday_Suit_Pants_Skin.png',rarity='Common',att=0,def=0,dodge=0,life=0,critical=0,id=0,cost=Math.floor(Math.random()*100),specialAtribute='none',description='aucune') {
        super(name,iconAdresse,'',rarity,att,def,dodge,life,critical,id,cost,specialAtribute,description)
        this.infos.type = 'Leggings'
    }
}

export default Leggings