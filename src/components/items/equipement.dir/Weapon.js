import Equipement from "../Equipement"

class Weapon extends Equipement {
    constructor(name,iconAdresse='https://art.pixilart.com/661f9bda0e9b95e.png',rarity='Common',att=0,def=0,dodge=0,life=0,critical=0,id=0,cost=Math.floor(Math.random()*100),specialAtribute='none',description='aucune') {
        super(name,iconAdresse,'',rarity,att,def,dodge,life,critical,id,cost,specialAtribute,description)
        this.infos.type = 'Weapon'
    }
}

export default Weapon