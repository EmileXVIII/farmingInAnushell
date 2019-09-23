import React, { Component } from "react";
import createNElements from "./inventory.dir/creerNelement";
import InventoryObject from "./inventory.dir/InventoryObject";
import { inventoryEquipementSaver, inventoryExpendableSaver, lenInvExpendable, lenInvEquipement } from "../../App";
import InfoItems from "./inventory.dir/InfoItems";

class InventoryModule extends Component {
    constructor() {
        super()
    }

    componentWillUnmount() {
        inventoryEquipementSaver.saveAll();
        inventoryExpendableSaver.saveAll()
    }

    render() {
        return (
            <div className='w-100 h-100'>
                <h3 className="text-center mb-3">Inventory</h3>
                <p>E to equip / D to sell / M to merge</p>
                <div className="inventory w-100 h-100">
                    <div className="element_inventory">
                        <div name='conteneur_activables' className="conteneur_activables">
                            {createNElements(InventoryObject, lenInvExpendable, { className: 'objet activable_case', conteneurname: 'conteneur_activables' })}
                        </div>
                        <div name="conteneur_inventaire" className="conteneur_inventaire">
                            {createNElements(InventoryObject, lenInvEquipement, { className: 'objet equipement_case', conteneurname: 'conteneur_inventaire' })}
                        </div>
                        <InfoItems />
                    </div>
                </div>
            </div>
        )
    }
}

export default InventoryModule;