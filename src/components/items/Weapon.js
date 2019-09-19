import React, { Component } from "react";
import Equipement from './Equipement'

class Weapon extends Equipement {
    constructor(name, props) {
        super(props)
        this.infos.name = name
        this.infos.image = 'https://art.pixilart.com/661f9bda0e9b95e.png'   
    }
}

export default Weapon