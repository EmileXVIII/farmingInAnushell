import Item from './Item'

class Equipement extends Item {
    constructor(name, iconAdresse, type, life, atk, def, dodge, critical) {
        super(name, iconAdresse)
        this.life = life
        this.atk = atk
        this.def = def
        this.dodge = dodge
        this.critical = critical
        this.type = type;
    }

    factorielle(n, res = 1) {
        if (n % 1 !== 0) { throw new Error('float number') };
        if (n < 2) { return res };
        res = res * n--;
        return this.factorielle(n, res)
    }

    get life() { return this.life * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) + 1)) };
    get atk() { return this.atk * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) + 1)) };
    get def() { return this.def * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) + 1)) };
    get dodge() { return this.dodge * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) + 1)) };
    get critical() { return this.critical * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) + 1)) }

    set atk(value) { return this.atk + value }


}
export default Equipement
