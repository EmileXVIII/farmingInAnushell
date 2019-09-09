import React, { Component } from "react";
import createNElements from "./inventory/creerNelement";
import InventoryObject from "./inventory/InventoryObject";
  

class InventoryModule extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='w-100 h-100'>
                <h3 className="text-center mb-3">Inventory</h3>
                <div className="inventory w-100 h-100">
                    <div className="element_inventory">
                        <div name='conteneur_activables' className="conteneur_activables">
                            {createNElements(InventoryObject, 8, { className: 'objet activable', conteneurName:'conteneur_activables' })}
                        </div>
                        <div name="conteneur_inventaire" class="conteneur_inventaire">
                            {createNElements(InventoryObject, 3 * 8, { className: 'objet equipement_case', conteneurName:'conteneur_inventaire' })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InventoryModule