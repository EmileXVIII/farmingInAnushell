import React, { Component } from "react";
import Item from "../../items/Item";

let maxItems = 6
let style = {
    backgroundColor : ''
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
/*
for(let i = 0; i < maxItems; i++) {
    let newItem = new Item();
    newItem.setId(i)
    newItem.setImage('https://cdn1.iconfinder.com/data/icons/arms-and-armor/100/20-512.png')
    newItem.setName('item équipé numéro ' + i)
    let rarityArray = newItem.getRarityArray()
    let randomRarity = Math.floor(Math.random() * 5)
    newItem.setRarity(rarityArray[randomRarity])
    items.push(newItem)
}
*/


const arrayImg = [
    'https://art.pixilart.com/4cace868c94ee16.png',
    'http://pixelartmaker.com/art/63862e153250ee3.png',
    'https://art.pixilart.com/661f9bda0e9b95e.png',
    'https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/c/c7/Birthday_Suit_Pants_Skin.png',
    'https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/defense_protect_armor_plate_hero-512.png',
    'https://cdn2.iconfinder.com/data/icons/retro-game-items-revamp-border/100/shield_protect_weapon_defense_gold_hero-512.png'
]

const arrayName = [
    'Tank Helmet',
    'Nurse Shoes',
    'Deter Weapon',
    'Ninja Leggings',
    'Leto\'s Breastplate',
    'Shield'
]

const arrayDescription = [
    '16$ on amazon for cringy medieval cosplay.',
    'Smell good.',
    'Arms in your back make you run faster',
    'You\'re not exhausted anymore while running.',
    'Allow you to feed a baby.',
    'My dream everynight.'   
]

function addItem () {
    for (let i = 0; i < 6; i++) {
        let newItem = new Item()
        newItem.setImage(arrayImg[i])
        newItem.setName(arrayName[i])
        newItem.setDescription(arrayDescription[i])
        newItem.setRarity(newItem.getRarityArray()[Math.floor(Math.random() * 5)])
        items.push(newItem)
    }   
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
   }

    render() {
        return (
            <div id="Character">
                <h3 className="text-center">Character</h3>
                <div class="character">
                    <div className="row">
                        {this.props.items.map((item)=>
                            <img 
                                onClick={() => this.setState({ item : item})}   
                                //style={style}
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
                                        style = {
                                            backgroundColor : RARITY[item.Rarity]
                                        }
                                        return(
                                            <div>
                                                <div className="row">        
                                                    <div className="col-4">
                                                        <img style={style} className="rounded border" width="120" src={item.Image}/>
                                                    </div>
                                                    <div className="col-8">
                                                        <b>{item.Name}</b>
                                                        <p>({item.Rarity})</p>
                                                    </div>
                                                </div>
                                                <p className="mt-5">{item.Description}</p>
                                            </div>
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                        <div className="element-character border">
                            {/* Image */}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CharacterStuff

