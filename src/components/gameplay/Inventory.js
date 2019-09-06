import React, { Component } from "react";
import createNElements from "./inventory/creerNelement";
import './inventory/inventaire.css';

class Inventory extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h3 className="text-center mb-3">Inventory</h3>
                <div class="inventory w-100 h-100">
                    <div class="element-inventory">
                        <div name='conteneur_inventaire' class="wrapper d-flex justify-content-around">
        {createNElements('div', 50, { className: 'objet' }, [
                            <img src='/img/EmptySlote.jpg' alt='object_background' />,
                            <div className='filter'></div>,
                            <div className='icon_objet'></div>])}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory