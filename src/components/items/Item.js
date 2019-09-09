import React, { Component } from "react";

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
            Description: null,
            Rarity: this.rarity[0],
            Type: null,
            Image: 'https://p7.hiclipart.com/preview/714/559/621/sword-weapon-pixel-art-pixelation-pixel.jpg',
            Description: 'Simple helmet for people lacking personality'
        }
    }


    setName(name) {
        this.stats.Name = name
    }

    setId(id) {
        this.stats.Id = id
    }
}

export default Item