import React, { Component } from "react";

class Inventory extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h3 className="text-center mb-3">Inventory</h3>
                <div className="inventory w-100 h-100">
                    <div className="element-inventory">
                        <div className="wrapper d-flex justify-content-around">
                        <img src='/img/inventory_2.png' width='700'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory