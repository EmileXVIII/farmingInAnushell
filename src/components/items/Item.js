class Item {
    constructor() {
        this.rarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

        this.stats = {
            Id: 0,
            Life: 0,
            Atk: 0,
            Def: 0,
            Dodge: 0,
            Critical: 0,
            Cost: 0,
            SpecialAttribute: null,
            Name: '',
            Rarity: this.rarity[0],
            Type: null,
            Image: '',
            Description: 'Simple helmet for people lacking personality'
        }
    }

    getRarityArray() {
        return this.rarity
    }

    setName(name) {
        this.stats.Name = name
    }

    setId(id) {
        this.stats.Id = id
    }

    setImage(image) {
        this.stats.Image = image
    }

    setRarity(rarity){
        this.stats.Rarity = rarity
    }

    setDescription(description) {
        this.stats.Description = description
    }
}

export default Item