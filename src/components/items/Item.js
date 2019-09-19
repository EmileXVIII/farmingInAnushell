class Item {
    constructor() {
        this.getIndexRarity = this.getIndexRarity.bind(this)
        this.rarityArray = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

        this.infos = {
            id: 0,
            cost: this.randomInt(100),
            specialAttribute: null,
            name: null,
            description: "Pas de Description",
            type: null,
            image: '',
            location: null,
        }
    }
  
    getRarityArray() {
        return this.rarityArray
    }

    setName(name) {
        this.infos.name = name
    }

    setId(id) {
        this.infos.id = id
    }

    setImage(image) {
        this.infos.image = image
    }

    

    setDescription(description) {
        this.infos.description = description
    }

    randomInt(Max) {
        return Math.floor(Math.random() * Max)

    }
}

export default Item