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
            Cost: this.randomInt(100),
            SpecialAttribute: null,
            Name: null,
            Description: "Pas de Description",
            Rarity: this.rarity[0],
            Type: null,
            Image: '',
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

    setRarity(rarity) {
        this.stats.Rarity = rarity
    }

    setDescription(description) {
        this.stats.Description = description
    }

    randomInt(Max) {
        return Math.floor(Math.random() * Max)

    }
}

export default Item