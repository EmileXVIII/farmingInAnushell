import Equipement from "../Equipement.js";

class Breastplate extends Equipement {
    constructor(name,iconAdresse='https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/defense_protect_armor_plate_hero-512.png',rarity='Common',att=0,def=0,dodge=0,life=0,critical=0,id=0,cost=Math.floor(Math.random()*100),specialAtribute='none',description='aucune') {
        super(name,iconAdresse,'',rarity,att,def,dodge,life,critical,id,cost,specialAtribute,description)
        this.infos.type = 'Brestplate'
    }
}

export default Breastplate