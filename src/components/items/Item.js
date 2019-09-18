class Item {
    constructor(
        name = null,
        iconAdresse = '',
        rarity = 'Common',
        id = 0,
        cost = Math.floor(Math.random() * 100),
        specialAttribute = null,
        description = "Pas de Description",
        type = null,
         ) {
        this.rarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

        this.infos = {
            id,
            cost,
            specialAttribute,
            name,
            description,
            rarity,
            type,
            iconAdresse,
        }
        this.getIndexRarity=this.getIndexRarity.bind(this)
    }

    get Atk(){
        return 4 + 4 ** this.rarity.indexOf(this.stats.Rarity)
    }

    get Def(){
        return 4 + 4 ** this.rarity.indexOf(this.stats.Rarity)
    }

    

    getIndexRarity() {
        return this.getRarityArray().indexOf(this.stats.Rarity)
    }

    getRarityArray() {
        return this.rarity
    }

    setName(name) {
        this.infos.name = name
    }

    setId(id) {
        this.infos.id = id
    }

    setImage(image) {
        this.infos.iconAdresse = image
    }

    setRarity(rarity) {
        this.infos.rarity = rarity
    }

    setDescription(description) {
        this.infos.description = description
    }

    randomInt(Max) {
        return Math.floor(Math.random() * Max)

    }
}

export default Item