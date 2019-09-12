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


// TEST (TO DELETE)
let newItem = new Item();
newItem.setId(1)
newItem.setImage('https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16363.png')
newItem.setName('Tank Helmet')
newItem.setDescription('16$ on amazon for cringy medieval cosplay.')
let rarityArray = newItem.getRarityArray()
let randomRarity = Math.floor(Math.random() * 5)
newItem.setRarity(rarityArray[randomRarity])
items.push(newItem)

newItem = new Item();
newItem.setId(2)
newItem.setImage('https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11029.png')
newItem.setName('Nurse Shoes')
newItem.setDescription('Smell good.')
 rarityArray = newItem.getRarityArray()
 randomRarity = Math.floor(Math.random() * 5)
newItem.setRarity(rarityArray[randomRarity])
items.push(newItem)

newItem = new Item();
newItem.setId(3)
newItem.setImage('https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/19065.png')
newItem.setName('Deter Weapon')
newItem.setDescription('Arms in your back make you run faster')
 rarityArray = newItem.getRarityArray()
 randomRarity = Math.floor(Math.random() * 5)
newItem.setRarity(rarityArray[randomRarity])
items.push(newItem)

newItem = new Item();
newItem.setId(4)
newItem.setImage('https://gamepedia.cursecdn.com/arksurvivalevolved_gamepedia/c/c7/Birthday_Suit_Pants_Skin.png')
newItem.setName('Ninja Leggings')
newItem.setDescription('You\'re not exhausted anymore while running.')
 rarityArray = newItem.getRarityArray()
 randomRarity = Math.floor(Math.random() * 5)
newItem.setRarity(rarityArray[randomRarity])
items.push(newItem)

newItem = new Item();
newItem.setId(5)
newItem.setImage('https://lh3.googleusercontent.com/uoP9b8UNQWy5uOWNhQ03tyW-slNvpYMa-2vbrYhFB1nod8KkzsEUV4rn8K83QItZOdr_Qij8cN1R7ONlpMRjbZQ=s400')
newItem.setName('Leto\'s Breastplate')
newItem.setDescription('Allow you to feed a baby.')
 rarityArray = newItem.getRarityArray()
 randomRarity = Math.floor(Math.random() * 5)
newItem.setRarity(rarityArray[randomRarity])
items.push(newItem)

newItem = new Item();
newItem.setId(6)
newItem.setImage('https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82182.png')
newItem.setName('Shield')
newItem.setDescription('My dream everynight.')
 rarityArray = newItem.getRarityArray()
 randomRarity = Math.floor(Math.random() * 5)
newItem.setRarity(rarityArray[randomRarity])
items.push(newItem)




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
                        {items.map((item)=>
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
                                            <>
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
                                            </>
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

