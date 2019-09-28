import React, { Component } from "react";
import Item from "../items/Item";
import Leggings from "../items/equipement.dir/Leggings";
import Helmet from "../items/equipement.dir/Helmet";
import Breastplate from "../items/equipement.dir/Breastplate";
import Shield from "../items/equipement.dir/Shield";
import Shoes from "../items/equipement.dir/Shoes";
import Weapon from "../items/equipement.dir/Weapon";


let style = {
    backgroundColor: ''
}

let colorStyle = {
    color: ''
}

let nextColorStyle = {
    color: ''
}

let futurCost = 0
let cost = 150


// Get rarety/color association
let RARITY = {
    'Common': 'white',
    'Uncommon': 'green',
    'Rare': 'blue',
    'Epic': 'purple',
    'Legendary': 'goldenrod'
}



/* TODO : items should be a result from database */


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}



class Wrought extends Component {
    constructor() {
        super()
        this.state = {
            item: {}
        }
    }

    //Return rarity index + 1

    getNextRarity(item) {
        const currentRarity = item.getRarityArray().indexOf(item.infos.rarity)
        const nextRarity = currentRarity + 1
        return nextRarity
    }

    upgradeItem(item, futurCost) {
        if (this.props.checkIfBuyable(futurCost)) {
            this.props.lostGold(futurCost)
            let nextItem = this.getNextRarity(item)
            item.setRarity(item.rarityArray[nextItem])

            //Props -> check Gamepage
            this.props.upgradeItem(item.infos.name)
        }
    }

    render() {
        return (
            <div className="wrought-content">
                <h3 className="text-center mb-3">Wrought</h3>
                <div class="text-center">
                    {(() => {
                        if (isEmpty(this.state.item)) {
                            return (
                                <div>
                                    <div className="mb-3 div-center carre"></div>
                                </div>
                            )
                        } else {
                            let item = this.state.item
                            let futurRarity = this.getNextRarity(this.state.item)
                            futurCost = cost * futurRarity ** futurRarity

                            if (futurRarity > 4) {
                                document.getElementById("upgrade-button").disabled = true;
                                futurRarity = 'Max level reached'
                                futurCost = 'Unavailable'
                            } else {
                                document.getElementById("upgrade-button").disabled = false;
                                futurRarity = this.state.item.getRarityArray()[futurRarity]

                            }

                            style = {
                                backgroundColor: RARITY[item.infos.rarity]
                            }
                            colorStyle = {
                                color: RARITY[item.infos.rarity]
                            }
                            nextColorStyle = {
                                color: RARITY[futurRarity]
                            }

                            return (
                                <div>
                                    <div className="forge">
                                        <img style={style} className="rounded" width="100" src={item.infos.iconAdresse} />
                                    </div>
                                    <div class="medium-div-center mt-3  border">
                                        <p>Current rarity : <span style={colorStyle}>{item.infos.rarity}</span></p>
                                        <p>Next level : <span style={nextColorStyle}>{futurRarity}</span></p>
                                        <p>Cost <span>{futurCost}</span>
                                            <img src="https://cdn0.iconfinder.com/data/icons/cash-card-starters-colored/48/JD-02-512.png" width="40" />
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })()}
                </div>

                <form>
                    <div className="text-center border center-div">
                        {/* map arrayItem in GamePage*/}
                        {this.props.items.map((item) =>
                            <img
                                onClick={() => this.setState({ item: item })}
                                title={item.infos.name}
                                data-toggle="tooltip"
                                data-placement="top"
                                className="onHover mx-3 my-3 border"
                                width="75"
                                alt="item-icon"
                                src={item.infos.iconAdresse}
                                key={item.infos.id}
                            />
                        )}
                    </div>
                </form>
                <div className="forge-buttton text-center mt-3 pb-5 d-flex justify-content-around">
                    <button onClick={() => { this.upgradeItem(this.state.item, futurCost); this.props.updateStats() }} type="button" id="upgrade-button" className="btn btn-outline-info"> Upgrade </button>
                </div>
            </div>
        )
    }
}

export default Wrought