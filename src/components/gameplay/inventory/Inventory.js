import React, { Component } from "react";
import { Button } from 'reactstrap'
import Item from "../../items/Item";


/* TODO : items should be a result from database */
let items = []
for(let i = 0; i < 18; i++) {
    let newItem = new Item();
    newItem.setId(i)
    newItem.setName('item numéro ' + i)
    items.push(newItem)
}

class Inventory extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div class='w-100 h-100'>
                <h3 className="text-center mb-3">Inventory</h3>
                <div className="border inventory w-100 h-100">
                    <div className="element-inventory">
                        <div className="wrapper">
                            <div className="ml-4 mt-3">
                                {items.map((item)=>
                                    <img 
                                        onClick={() => console.log(item.stats.Name)}
                                        title={item.stats.Name} 
                                        data-toggle="tooltip" 
                                        data-placement="top" 
                                        className="onHover mx-3 my-3 border" 
                                        width="75" 
                                        src={item.stats.Image} 
                                        key={item.stats.Id}
                                    />
                                )}
                            </div>
                            <div className="focus-item mt-3">
                                {/* Item to display : Name, Description ...*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory