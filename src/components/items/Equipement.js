import Item from './Item'

class Equipement extends Item {
    constructor(name,iconAdresse,type) {
        super(name,iconAdresse)
        this.type=type;
    }  
    get atk() {return 4 + 4 ** this.rarityArray.indexOf(this.infos.rarity)};
    get def() {return 4 + 4 ** this.rarityArray.indexOf(this.infos.rarity)};
    get life() {return 4 + 4 ** this.rarityArray.indexOf(this.infos.rarity)};
    get dodge() {return 4 + 4 ** this.rarityArray.indexOf(this.infos.rarity)};
    get critical() {return 4 + 4 ** this.rarityArray.indexOf(this.infos.rarity)}

}

export default Equipement
