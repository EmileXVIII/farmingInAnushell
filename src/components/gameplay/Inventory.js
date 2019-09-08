import React, { Component } from "react";
import createNElements from "./inventory/creerNelement";
import Filter from "./inventory/filter"
class Inventory extends Component {
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
                            {createNElements('div', 8, { className: 'objet activable' }, [
                                <div className='icon_objet' />,
                                <div className='filter'></div>])}
                        </div>
                        <div name="conteneur_inventaire" class="conteneur_inventaire">
                            {createNElements('div', 3 * 8, { className: 'objet equipement case' }, [
                                <div className='icon_objet' />,
                                <Filter />])}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory