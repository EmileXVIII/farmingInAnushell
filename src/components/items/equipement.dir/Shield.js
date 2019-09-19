import Equipement from "../Equipement"

class Shield extends Equipement {
    constructor(name,iconAdresse='https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/shield_protect_weapon_defense_gold_hero-512.png') {
        super(name,iconAdresse,'Shield');
    }
}

export default Shield