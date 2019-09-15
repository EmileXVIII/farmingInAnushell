import Equipement from "../Equipement"

class Shoes extends Equipement {
    constructor(name,iconAdresse='http://pixelartmaker.com/art/63862e153250ee3.png',rarity='Common',att=0,def=0,dodge=0,life=0,critical=0,id=0,cost=Math.floor(Math.random()*100),specialAtribute='none',description='aucune') {
        super(name,iconAdresse,'',rarity,att,def,dodge,life,critical,id,cost,specialAtribute,description)
        this.infos.type = 'Shoes'
    }
}

export default Shoes