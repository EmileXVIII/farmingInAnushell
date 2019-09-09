import React, { Component } from "react";
import Item from "../../items/Item";


/* TODO : items should be a result from database */
let items = []
for(let i = 0; i < 18; i++) {
    let newItem = new Item();
    newItem.setId(i)
    newItem.setName('item numéro ' + i)
    items.push(newItem)
}



function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


class Inventory extends Component {
    constructor() {
        super()
        this.state = {
            item : {}
        }
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
                                        onClick={() => this.setState({ item : item})}
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
                            <div className="focus-item mt-3 text-center">
                                <div className="container text-center">
                                   {(() => {
                                        if(isEmpty(this.state.item)) {
                                            return(
                                                <p>
                                                    Please select an item
                                                </p>
                                            )
                                        } else {
                                            let item = this.state.item.stats
                                            return(
                                                <div className="row">        
                                                    <div className="col-4">
                                                        <img className="rounded" width="150" src={item.Image}/>
                                                    </div>
                                                    <div className="col-8">
                                                        <b>{item.Name}</b>
                                                        <p className="mt-3">{item.Description}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory