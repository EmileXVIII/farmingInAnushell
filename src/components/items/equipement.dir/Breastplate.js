import Equipement from "../Equipement.js";

class Breastplate extends Equipement {
    constructor(name,iconAdresse='https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/defense_protect_armor_plate_hero-512.png') {
        super(name,iconAdresse,'Breastplate');
    }
}

export default Breastplate