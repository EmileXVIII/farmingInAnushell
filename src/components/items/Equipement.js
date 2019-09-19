import Item from './Item'

class Equipement extends Item {
    constructor() {
        super()
        

        this.stats = {
            rarityArray: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'],
            rarity: this.rarityArray[0],
            get atk() {return 4 + 4 ** this.rarityArray.indexOf(this.rarity)},
            get def() {return 4 + 4 ** this.rarityArray.indexOf(this.rarity)},
            get life() {return 4 + 4 ** this.rarityArray.indexOf(this.rarity)},
            get dodge() {return 4 + 4 ** this.rarityArray.indexOf(this.rarity)},
            get critical() {return 4 + 4 ** this.rarityArray.indexOf(this.rarity)},
        }      
    }

    setRarity(rarity) {
        this.stats.rarity = rarity
    }   
    
    getIndexRarity() {
        return this.getRarityArray().indexOf(this.stats.rarity)
    }
}

export default Equipement