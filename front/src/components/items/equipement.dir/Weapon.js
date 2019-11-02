import Equipement from "../Equipement"

class Weapon extends Equipement {
    constructor(name,iconAdresse='https://art.pixilart.com/661f9bda0e9b95e.png') {
        super(name,iconAdresse,'Weapon');
    }
}

export default Weapon