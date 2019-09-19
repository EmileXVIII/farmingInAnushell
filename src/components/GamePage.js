import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
import { Col, Button } from 'reactstrap';
import CharacterStuff from "./gameplay/CharacterStuff/CharacterStuff.js";
import Wrought from "./gameplay/Wrought";
import Shop from "./gameplay/Shop/Shop";
import Room from "./gameplay/Room/Room.js"
import Player from "./characters/Player"
import Monster from "./characters/Monster"
import InventoryModule from "./gameplay/InventoryModule";
import soundfile from "../music/backgroundtheme.mp3"
import Sound from "react-sound"
import Leggings from "./items/equipement.dir/Leggings.js";
import Helmet from "./items/equipement.dir/Helmet.js";
import Breastplate from "./items/equipement.dir/Breastplate.js";
import Shield from "./items/equipement.dir/Shield.js";
import Shoes from "./items/equipement.dir/Shoes.js";
import Weapon from "./items/equipement.dir/Weapon.js";
import SaverItemEquip from "./gameplay/CharacterStuff/SaverItemsEquip.js";
import { gestionnaireEvents } from "./gameplay/inventory.dir/inventoryEvents.js";

let itemsEquips=new SaverItemEquip(new Leggings('Leggings'), new Helmet('Helmet'), new Breastplate('Breastplate'), new Shield('Shield'), new Shoes('Shoes'), new Weapon('Weapon'))

class GamePage extends Component {
    constructor() {
        super()
        this.state = {
            gameplayElement: 'inventary',
            combatInfo: 'Waiting...',
            playerTest: new Player('Player'),
            monsterTest: new Monster('Monster'),
            playerHP: null,
            monsterHP: null,
            counter: 0,
            gold: 500,
            arrayItem: itemsEquips.listObj,
        }
        this.lostGold = this.lostGold.bind(this)
        this.putMessage=this.putMessage.bind(this)
        this.updateStats(this.state.playerTest)
    }
    componentDidMount (){
        gestionnaireEvents.on('sellItem',this.lostGold);
        gestionnaireEvents.on('newCombatInfo',this.putMessage)
    }
    componentWillUnmount (){
        gestionnaireEvents.off('sellItem',this.lostGold)
        gestionnaireEvents.off('newCombatInfo',this.putMessage)
    }
    toggleElements() {
        switch (this.state.gameplayElement) {
            default: case 'inventary':
                return (
                    <div>
                        <InventoryModule />
                    </div>
                )
            case 'characterStuff':
                return (
                    <div>
                        <CharacterStuff items={this.state.arrayItem} player={this.state.playerTest}/>
                    </div>
                )
            case 'wrought':
                return (
                    <div>
                        <Wrought lostGold={(cost) => this.lostGold(cost)} upgradeItem={(name) => this.setState({combatInfo: 'You upgraded ' + name })} items={this.state.arrayItem} updateStats={() => this.updateStats(this.state.playerTest)}/>
                    </div>
                )
            case 'shop':
                return (
                    <div>
                        <Shop checkIfBuyable={(cost) => {return this.checkIfBuyable(cost)}} lostGold={(cost) => {this.lostGold(cost)}} displayBuying={(name) => this.setState({ combatInfo: 'You just bought ' + name })} />
                    </div>
                )
            case 'room':
                return (
                    <div>
                        <Room startGame={() => this.checkPlayerAlive(this.state.playerTest, this.state.monsterTest)} selfHealing={() => this.healMySelf(this.state.playerTest)} />
                    </div>
                )
        }
    }
    putMessage(message){
        this.setState({combatInfo:message})
    }
    updateStats = (player) => {
        this.getAtk(player)
        this.getDef(player)
    }

    getAtk(player) {
        var resultAtk = player.stats.BaseAtk
        for (let i = 0; i < this.state.arrayItem.length; i++) {
         resultAtk += this.state.arrayItem[i].atk
        }
        player.stats.Atk = resultAtk
    }
 
    getDef(player) {
     var resultDef = player.stats.BaseAtk
     for (let i = 0; i < this.state.arrayItem.length; i++) {
      resultDef += this.state.arrayItem[i].def
         }
         player.stats.Def = resultDef
     }

    checkIfBuyable = (cost) => {
        if (cost > this.state.gold) {
            this.setState({ combatInfo: 'Too broke...' })
            return false;    
        }
        return true; 
    }
     

    lostGold = (gold) => {
        this.setState ((prevState)=>({ gold: prevState.gold - gold }))     
    }

     float2int = (value) => {
        return value | 0;
    }


    healMySelf = (character) => {
        character.stats.Life += 100
        this.setState({ playerHP: character.stats.Life })
    }

    createCombat = (player, monster, callback) => {
        this.setState({ playerHP: player.stats.Life })
        this.setState({ monsterHP: monster.stats.Life })

        if (player.stats.Alive) {
            if (monster.stats.Alive) {
                setTimeout(() => callback('The battle begin'), 500)
            } else {
                setTimeout(() => callback('...but the farming is never ending !'), 500)
            }
        } else {
            const goldLost = Math.round(player.stats.Gold / 10)
            player.stats.Gold -= goldLost
            this.setState({ gold: player.stats.Gold, })
            this.setState({ combatInfo: 'You are dead. Heal yourself before going back. You killed ' + this.state.counter + ' monster. You lost ' + goldLost + ' gold.' })
        }
    }

    playerAlive = (player, monster, callback) => {
        setTimeout(() => callback(player.stats.Username + ' is going to attack !'), 500)
    }

    bothAlive = (player, monster, callback) => {
        if (monster.stats.Alive) {
            setTimeout(() => callback(player.Attack(monster)), 500)
        }
        else {
            monster.stats.Life = 80
            this.setState({ monsterHP: monster.stats.Life, combatInfo: 'Another monster is coming !' })
            setTimeout(() => callback(player.Attack(monster)), 500)
        }

    }

    monsterAlive = (player, monster, callback) => {
        this.setState({ monsterHP: monster.stats.Life })

        if (monster.stats.Alive) {
            setTimeout(() => callback(monster.Attack(player)), 500)
        } else {
            const goldEarned = monster.randomInt(100)
            this.setState({ counter: this.state.counter + 1, gold: this.state.gold + goldEarned, })
            player.stats.Gold = this.state.gold
            setTimeout(() => callback('You killed a monster. You earned ' + goldEarned + ' gold'), 500)
        }
    }

    checkPlayerAlive = (player, monster) => {
        if (player.stats.Alive) {
            setTimeout(() => this.testCombat2(player, monster, messageInfo => { this.setState({ combatInfo: messageInfo }) }), 500)
        }
        else {
            this.setState({ combatInfo: 'You should rest...' })
        }
    }

    

    testCombat2 = (player, monster, callback) => {

        this.createCombat(player, monster, message => {
            this.setState({ combatInfo: message })

            this.playerAlive(player, monster, message2 => {
                this.setState({ combatInfo: message2 })

                this.bothAlive(player, monster, message3 => {
                    this.setState({ combatInfo: message3 })

                    this.monsterAlive(player, monster, message4 => {
                        this.setState({ combatInfo: message4 })

                        this.testCombat2(player, monster)
                    })
                })
            })
        })
    }

    render() {
        return (
            <div>
                <Sound
                    url={soundfile}
                    playStatus={Sound.status.PLAYING}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />
                <div className="d-flex justify-content-around">
                    <h1 className="my-3 text-white text-center">Farming in a Nutshell</h1>
                    <a className="btn btn-logout btn-warning mt-3" href="/">Logout</a>
                </div>

                <div className="mt-5 border py-3  mx-3">
                    <Grid className="d-flex text-white">
                        {/*Game scene*/}
                        <div className="border col-6">
                            <img width="700" src="/img/gamescene_1.png" />
                            <div className="gameplay-infos border py-3 px-3">
                                <a>{this.state.combatInfo}</a>
                            </div>
                            <br />
                            <div className="gameplay-infos border py-3 px-3">
                                <a>Player HP : {this.state.playerHP}</a>
                            </div>
                            <br />
                            <div className="gameplay-infos border py-3 px-3">
                                <a>Monster HP : {this.state.monsterHP}</a>
                            </div>
                            <br />
                            <div className="gameplay-infos border py-3 px-3">
                                <a>Gold : {Math.round(this.state.gold)}</a>
                            </div>
                            <br />
                            <div className="gameplay-infos border py-3 px-3">
                                <a>Monster killed : {this.state.counter}</a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-around mb-5">
                                <Button onClick={() => this.setState({ gameplayElement: 'inventary' })}>Inventory</Button>
                                <Button onClick={() => this.setState({ gameplayElement: 'characterStuff' })}>Character</Button>
                                <Button onClick={() => this.setState({ gameplayElement: 'wrought' })}>Wrought</Button>
                                <Button onClick={() => this.setState({ gameplayElement: 'shop' })}>Shop</Button>
                                <Button onClick={() => this.setState({ gameplayElement: 'room' })}>Room</Button>
                            </div>
                            <Cell className="dynamic-content">
                                {this.toggleElements()}
                            </Cell>
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default GamePage;
export {itemsEquips}