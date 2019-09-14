import React, { Component } from "react";
import Item from "../items/Item";
import Helmet from "../items/Helmet";
import Leggings from "../items/Leggings"
import Breastplate from "../items/Breastplate";
import Shield from "../items/Shield"
import Shoes from "../items/Shoes";
import Weapon from "../items/Weapon"


let style = {
    backgroundColor : ''
}

let colorStyle = {
    color: ''
}

let nextColorStyle = {
    color: ''
}

let futurCost = 0
let cost = 10
let userCoins = 120


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
for(let i = 1; i < 7; i++) {
    const random = randomInt(6)
    const arrayItem = [new Leggings('Leggings'), new Helmet('Helmet'), new Breastplate('Breastplate'), new Shield('Shield'), new Shoes('Shoes'), new Weapon('Weapon')]
    let newItem = arrayItem[random]
    newItem.setId(i)
    let rarityArray = newItem.getRarityArray()
    let randomRarity = Math.floor(Math.random() * 5)
    newItem.setRarity(rarityArray[randomRarity])
    items.push(newItem)
}

function randomInt(Max) {
        return Math.floor(Math.random() * Max)

    }


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}



class Wrought extends Component {
    constructor() {
        super()
        this.state = {
            item : {}
        }
    }

    getNextRarity(item) {
        const currentRarity = item.getRarityArray().indexOf(item.stats.Rarity)
        const nextRarity = currentRarity + 1
        return nextRarity
    }

    upgradeItem(item, futurCost) {
        if (this.props.lostGold(futurCost)) {
            let nextItem = this.getNextRarity(item)
            item.setRarity(item.rarity[nextItem])
            this.setState({ item : item })
            this.props.upgradeItem(item.stats.Name)
        }       
    }

    render() {
        return(
            <div className="wrought-content border">
                <h3 className="text-center mb-3">Wrought</h3>
                <div class="text-center  border">
                    {(() => {
                        if(isEmpty(this.state.item)) {
                            return(
                                <div>
                                    <div className="mb-3 div-center carre border"></div>
                                </div>
                            )
                        } else {
                            let item = this.state.item.stats
                            let futurRarity = this.getNextRarity(this.state.item)
                            futurCost = cost*(futurRarity + 2)

                            if (futurRarity > 4) {
                                document.getElementById("upgrade-button").disabled = true;
                                futurRarity = 'Max level reached'
                                futurCost = 'Unavailable'
                            } else {
                                document.getElementById("upgrade-button").disabled = false;
                                futurRarity = this.state.item.getRarityArray()[futurRarity]
                                
                            }

                            style = {
                                backgroundColor : RARITY[item.Rarity]
                            }
                            colorStyle = {
                                color : RARITY[item.Rarity]
                            }
                            nextColorStyle = {
                                color : RARITY[futurRarity] 
                            }

                            return(
                                <div>        
                                    <div className="forge">
                                        <img style={style} className="rounded" width="100" src={item.Image}/>
                                    </div>
                                    <div class="medium-div-center mt-3  border">
                                        <p>Current rarity : <span style={colorStyle}>{item.Rarity}</span></p>
                                        <p>Next level : <span style={nextColorStyle}>{futurRarity}</span></p>
                                        <p>Cost <span>{futurCost}</span> 
                                            <img src="https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-02-512.png" width="40"/>
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })()}
                </div>
            
                <form>
                    <div className="text-center border center-div">
                            {items.map((item) => 
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
                    </form>
                <div className="forge-buttton text-center mt-3 pb-5 d-flex justify-content-around">
                    <button onClick={() => this.upgradeItem(this.state.item, futurCost)} type="button" id="upgrade-button" className="btn btn-outline-info"> Améliorer </button>
                </div>
            </div>
        )
    }
}

export default Wrought