import React, { Component } from "react";

class Item {
    constructor(name) {
        this.rarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']

        this.stats = {
            Life: 0,
            Atk: 0,
            Def: 0,
            Dodge: 0,
            Critical: 0,
            Cost: 0,
            SpecialAttribute: null,
            Name: name,
            Description: "tu pu",
            Rarity: this.rarity[0],
            Type: null,
        }
    }
}

export default Item