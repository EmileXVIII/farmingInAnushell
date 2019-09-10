import React, { Component } from "react";
import Item from "../../items/Item";
import { Button } from "@material-ui/core";

let maxItems = 18

/* TODO : items should be a result from database */
let items = []
for(let i = 1; i < 19; i++) {
    let newItem = new Item();
    newItem.setId(i)
    newItem.setName('item numéro ' + i)
    newItem.setImage('https://cdn1.iconfinder.com/data/icons/arms-and-armor/100/20-512.png')
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
                <h3 className="text-center mb-3">
                    Inventory
                    <p className="small-text">{items.length} / {maxItems}</p>
                </h3>
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
                                        alt="item-icon"
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