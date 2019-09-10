import React, { Component } from "react";
import Item from "../../items/Item";
import { Button } from "@material-ui/core";

let maxItems = 6
let style = {
    backgroundColor : ''
}

let RARITY = {
    'Common' : 'white', 
    'Uncommon' : 'blue',
    'Rare' : 'orange', 
    'Epic' : 'purple', 
    'Legendary' : 'pink'
}


/* TODO : items should be a result from database */
let items = []
for(let i = 0; i < maxItems; i++) {
    let newItem = new Item();
    newItem.setId(i)
    newItem.setImage('https://cdn1.iconfinder.com/data/icons/arms-and-armor/100/20-512.png')
    newItem.setName('item équipé numéro ' + i)
    let rarityArray = newItem.getRarityArray()
    let randomRarity = Math.floor(Math.random() * 5)
    newItem.setRarity(rarityArray[randomRarity])
    items.push(newItem)
    console.log(randomRarity)
    console.log(newItem)
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


class CharacterStuff extends Component {
    constructor() {
        super()
        this.state = {
            item : {}
        }

//     handleClickHelmet = () => {
//         const div = document.getElementById("list-inventaire")
//         div.appendChild(<Inventaire />)
//     }
//     handleClickChest = () => {

//     }
//     handleClickMainHand = () => {

//     }
//     handleClickLegs = () => {

//     }
//     handleClickBoots = () => {

//     }
//     handleClickOffHand = () => {
   }

    render() {
        return (
            <div id="Character">
                <h3 className="text-center">Character</h3>
                <div class="character">
                    <div className="row">
                        {items.map((item)=>
                            <img 
                                onClick={() => this.setState({ item : item}),
                                style = {
                                    backgroundColor : RARITY[item.stats.Rarity]
                                }
                                }   
                                style={style}
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
                    <div className="row d-flex justify-content-around">
                        <div className="border focus-item-character mt-3 text-center">
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
                        <div className="element-character border">
                            {/* Image */}
                        </div>
                        <Button onClick={() => console.log(this.state.item)}>
                                    Test
                                </Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CharacterStuff




// <div className="character">
//     <div className="list-equip">
//         <div className="objet helmet"></div>
//         <div className="objet chest"></div>
//         <div className="objet mainhand"></div>
//     </div>
//     <div class="element-character"></div>
//     <div className="list-equip">
//         <div className="objet legs"></div>
//         <div className="objet boots"></div>
//         <div className="objet offhand"></div>
//     </div>
// </div>