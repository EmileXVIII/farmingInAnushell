import React, { Component } from "react";
class Inventory extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div class='w-100 h-100'>
                <h3 className="text-center mb-3">Inventory</h3>
                <div className="inventory w-100 h-100">
                    <div className="element-inventory">
                        <div className="wrapper d-flex justify-content-around">
                        <img src='/img/inventory_2.png' width='700'/>
                {/* <div class="inventory w-100 h-100">
                    <div class="element_inventory">
                        <div class="conteneur_activables">
                            {createNElements('div', 8, { className: 'objet activable' }, [
                                <div className='icon_objet' />,
                                <div className='filter'></div>])}
                        </div>
                        <div class="conteneur_inventaire">
                            {createNElements('div', 3 * 8, { className: 'objet equipement case' }, [
                                <div className='icon_objet' />,
                                <Filter/>])} */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory