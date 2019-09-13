class Item {
    constructor() {
        this.rarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

        this.stats = {
            Life: 0,
            Atk: 0,
            Def: 0,
            Dodge: 0,
            Critical: 0,
            Cost: 1,
            SpecialAttribute: null,
            Name: null,
            Description: "Pas de Description",
            Rarity: this.rarity[0],
            Type: null,
        }
    }
}

export default Item