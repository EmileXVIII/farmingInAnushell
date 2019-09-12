import React, { Component } from "react";
import Item from "../../items/Item";

let maxItems = 18

let style = {
    backgroundColor : ''
}

let colorStyle = {
    color: ''
}

// Get rarety/color association
let RARITY = {
    'Common' : 'white', 
    'Uncommon' : 'green',
    'Rare' : 'blue', 
    'Epic' : 'purple', 
    'Legendary' : 'goldenrod'
}

/* TODO : items should be a result from database */
let items = []
for(let i = 1; i < 19; i++) {
    let newItem = new Item();
    newItem.setId(i)
    newItem.setName('item numéro ' + i)
    newItem.setImage('https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16363.png')
    let rarityArray = newItem.getRarityArray()
    let randomRarity = Math.floor(Math.random() * 5)
    newItem.setRarity(rarityArray[randomRarity])
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
    
    deleteItem(item) {
        console.log(item)
        //TODO: Remove item from user inventory
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
                                            style = {
                                                backgroundColor : RARITY[item.Rarity]
                                            }
                                            colorStyle = {
                                                color : RARITY[item.Rarity]
                                            }
                                            return(
                                                <>
                                                <div className="row">        
                                                    <div className="col-4">
                                                        <img style={style} className="rounded" width="150" src={item.Image}/>
                                                    </div>
                                                    <div className="col-8">
                                                        <b>{item.Name}</b>
                                                        <p className="mt-3">{item.Description}</p>
                                                        <p><span style={colorStyle}>{item.Rarity}</span> item</p>
                                                    </div>
        
                                                </div>
                                                <div className="row mt-3 justify-content-around">
                                                        <div className="col">
                                                        <button className="btn btn-outline-primary">Equip</button>
                                                        </div>
                                                        <div className="col">
                                                        <button onClick={() => this.deleteItem(item)} className="btn btn-outline-secondary">Sell</button>
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                </>
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