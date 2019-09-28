import Item from './Item'

class Equipement extends Item {
    constructor(name, iconAdresse, type, life, atk, def, dodge, critical) {
        super(name,iconAdresse)
        this.life1 = life
        this.atk1 = atk
        this.def1 = def
        this.dodge1 = dodge
        this.critical1 = critical
        this.type=type;
    }

    factorielle(n,res=1){
        if (n%1!==0) {throw new Error('float number')};
        if (n < 2) {return res};
        res=res*n--;
        return factorielle(n,res)
    }

    get life() {return this.life1 * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) +1))};
    get atk() {return this.atk1 * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) +1))};
    get def() {return this.def1 * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) +1))};
    get dodge() {return this.dodge1 * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) +1))};
    get critical() {return this.critical1 * this.factorielle((this.rarityArray.indexOf(this.infos.rarity) +1))}

    set atk(value) {return this.atk + value}


}

export default Equipement
