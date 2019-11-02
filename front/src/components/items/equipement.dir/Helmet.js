import Equipement from '../Equipement.js'

class Helmet extends Equipement {
    constructor(name, iconAdresse='https://art.pixilart.com/4cace868c94ee16.png') {
        super(name, iconAdresse,'Helmet');
    }
}

export default Helmet