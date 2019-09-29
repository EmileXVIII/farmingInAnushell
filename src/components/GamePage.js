import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
import { Button } from 'reactstrap';
import CharacterStuff from "./gameplay/CharacterStuff/CharacterStuff.js";
import Wrought from "./gameplay/Wrought";
import Shop from "./gameplay/Shop/Shop";
import Room from "./gameplay/Room/Room.js"
import Player from "./characters/Player"
import Monster from "./characters/Monster"
import Boss1 from "./characters/Boss1"
import Boss2 from "./characters/Boss2"
import InventoryModule from "./gameplay/InventoryModule";
import Equipement from "./items/Equipement"
import Leggings from "./items/equipement.dir/Leggings.js";
import Helmet from "./items/equipement.dir/Helmet.js";
import Breastplate from "./items/equipement.dir/Breastplate.js";
import Shield from "./items/equipement.dir/Shield.js";
import Shoes from "./items/equipement.dir/Shoes.js";
import Weapon from "./items/equipement.dir/Weapon.js";
import SaverItemEquip from "./gameplay/CharacterStuff/SaverItemsEquip.js";
import { gestionnaireEvents, saveplease } from "./gameplay/inventory.dir/inventoryEvents.js";
import Boss3 from "./characters/Boss3.js";
import { inventoryEquipementSaver, idPerso, serveur } from '../App.js'
import axios from "axios";

let itemsEquips = new SaverItemEquip(new Leggings('Leggings'), new Helmet('Helmet'), new Breastplate('Breastplate'), new Shield('Shield'), new Shoes('Shoes'), new Weapon('Weapon'))

class GamePage extends Component {
    constructor() {
        super()
        this.state = {
            gameplayElement: 'inventary',
            combatInfo: 'Waiting...',
            playerTest: new Player('Player'),
            monsterTest: new Monster('Monster'),
            bossTest: [new Boss1('Drakôn'), new Boss2('Death boi'), new Boss3('Jeremy')],
            playerHP: null,
            monsterHP: null,
            counter: 30,
            gold: 5000000,
            levelPlayer: 0,
            xpPlayer: 0,
            arrayItem: itemsEquips.listObj,
            displayPlayer: "img/player.gif",
            displayMonster: "/img/monster.gif",
            displaySkill: '',
            worldLevelMax: [1],
            keyPad: "/img/monster.gif",
            currentWorld: 1,
            isFarming: false
        }
        itemsEquips.username = this.state.playerTest.Username;
        this.lostGold = this.lostGold.bind(this)
        this.putMessage = this.putMessage.bind(this)
        this.changeImgSKill = this.changeImgSKill.bind(this)
        this.loadSave()
        this.lvlUp(this.state.playerTest)
        console.log()
        setTimeout(() => this.updateStats(this.state.playerTest), 500)
    }
    componentDidMount() {
        gestionnaireEvents.on('displaySkill', this.changeImgSKill)
        gestionnaireEvents.on('sellItem', this.lostGold);
        gestionnaireEvents.on('newCombatInfo', this.putMessage);
        gestionnaireEvents.on('updateStateGamePage', this.updateState);
        gestionnaireEvents.on('newFreePotionImg', (keyPadUrlImg) => this.setState({ keyPad: keyPadUrlImg }))
        itemsEquips.username = this.state.playerTest.Username
    }
    componentWillUnmount() {
        gestionnaireEvents.off('sellItem', this.lostGold)
        gestionnaireEvents.off('newCombatInfo', this.putMessage)
        gestionnaireEvents.off('displaySkill', this.changeImgSKill)
        gestionnaireEvents.off('updateStateGamePage', this.updateState)
        gestionnaireEvents.off('newFreePotionImg', (keyPadUrlImg) => this.setState({ keyPad: keyPadUrlImg }))
    }

    changeImgSKill(img) {
        this.setState({ displaySkill: img })
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
                        <CharacterStuff items={this.state.arrayItem} player={this.state.playerTest} />
                    </div>
                )
            case 'wrought':
                return (
                    <div>
                        <Wrought checkIfBuyable={(cost) => this.checkIfBuyable(cost)} lostGold={(cost) => this.lostGold(cost)} upgradeItem={(name) => this.setState({ combatInfo: 'You upgraded ' + name })} items={this.state.arrayItem} updateStats={() => this.updateStats(this.state.playerTest)} />
                    </div>
                )
            case 'shop':
                return (
                    <div>
                        <Shop checkIfBuyable={(cost) => { return this.checkIfBuyable(cost) }} lostGold={(cost) => { this.lostGold(cost) }} displayBuying={(name) => this.setState({ combatInfo: 'You just bought ' + name })} />
                    </div>
                )
            case 'room':
                return (
                    <div>
                        <Room startGame={() => this.checkPlayerAlive(this.state.playerTest, this.state.monsterTest)} startBoss={() => this.checkPlayerAliveBoss(this.state.playerTest, this.state.bossTest[this.state.currentWorld - 1])} selfHealing={() => this.healMySelf(this.state.playerTest)} worldLevelMax={this.state.worldLevelMax} lowerCurrentWorld={() => this.lowerCurrentWorld()} upCurrentWorld={() => this.upCurrentWorld()} />
                    </div>
                )
        }
    }

    loadSave = () => {
        this.loadInventory()
        this.loadEquiped()
        this.loadStats()
    }

    loadInventory = () => {
        axios.get(`http://${serveur}/lienequip/false/${idPerso[0]}`)
            .then(response => {
                const result = response.data.data
                for (let i = 0; i < result.length; i++) {
                    let resultIndex = result[i]
                    let name = resultIndex.name
                    let iconAdresse = resultIndex.urlIcon
                    let type = resultIndex.type
                    let atk = resultIndex.att
                    let def = resultIndex.def
                    let crit = resultIndex.crit
                    let dodge = resultIndex.dodg
                    let description = resultIndex.description
                    let equip = new Equipement(name, iconAdresse, type, atk, def, crit, dodge, description)
                    inventoryEquipementSaver.addOnFreePlace(equip)
                }
            })
            .catch(error => console.log(error))
    }

    loadEquiped = () => {
        axios.get(`http://${serveur}/lienequip/true/${idPerso[0]}`)
            .then(response => {
                const result = response.data.data
                let arrayEquiped = []
                let finalArray = [null, null, null, null, null, null]
                for (let i = 0; i < result.length; i++) {
                    let resultIndex = result[i]
                    let name = resultIndex.name
                    let iconAdresse = resultIndex.urlIcon
                    let type = resultIndex.type
                    let life = resultIndex.life
                    let atk = resultIndex.att
                    let def = resultIndex.def
                    let crit = resultIndex.crit
                    let dodge = resultIndex.dodg
                    let description = resultIndex.description
                    let equip = new Equipement(name, iconAdresse, type, life, atk, def, crit, dodge, description)
                    arrayEquiped.push(equip)
                }

                arrayEquiped.forEach((itemEquiped) => {
                    switch (itemEquiped.type) {
                        case 'Leggings': finalArray[0] = itemEquiped; break;
                        case 'Helmet': finalArray[1] = itemEquiped; break;
                        case 'Breastplate': finalArray[2] = itemEquiped; break;
                        case 'Shield': finalArray[3] = itemEquiped; break;
                        case 'Shoes': finalArray[4] = itemEquiped; break;
                        case 'Weapon': finalArray[5] = itemEquiped; break;
                        default: break;
                    }
                })

                // for (let itemEquiped of arrayEquiped) {
                //     switch (itemEquiped.type) {
                //         case 'Leggings': finalArray[0] = itemEquiped; break;
                //         case 'Helmet': finalArray[1] = itemEquiped; break;
                //         case 'Breastplate': finalArray[2] = itemEquiped; break;
                //         case 'Shield': finalArray[3] = itemEquiped; break;
                //         case 'Shoes': finalArray[4] = itemEquiped; break;
                //         case 'Weapon': finalArray[5] = itemEquiped; break;
                //         default: break;
                //     }
                // }
                itemsEquips.listObj = finalArray
                this.setState({
                    arrayItem: itemsEquips.listObj
                })
            })
            .catch(error => console.log(error))
    }

    loadStats = () => {
        axios.get(`http://${serveur}/perso/lvl/gold/${idPerso[0]}`)
            .then(response => {
                const result = response.data.data[0]
                let golds = result.golds
                let xp = result.xp
                let worldMax = result.worldMax
                let level = result.level
                this.setState({ gold: golds, xpPlayer: xp, levelPlayer: level })
                for (let i = 1; i < worldMax; i++) {
                    this.state.worldLevelMax.push(i + 1)
                }
            })
            .catch(error => console.log(error))
    }

    lvlUp = (player) => {
        player.stats.BaseAtk = player.stats.BaseAtk * 1.1 ** (player.stats.Level - 1)
        player.stats.BaseDef = player.stats.BaseDef * 1.1 ** (player.stats.Level - 1)
        player.stats.BaseLife = player.stats.BaseLife * 1.05 ** (player.stats.Level - 1)
    }

    putMessage(message) {
        this.setState({ combatInfo: message })
    }

    lowerCurrentWorld = () => {
        if (this.state.currentWorld === 1) {
            this.setState({ combatInfo: 'Cant go lower' })
        }
        else {
            this.setState(prevState => ({
                currentWorld: prevState.currentWorld - 1, combatInfo: 'Going to the previous world'
            }));
        }
    }

    upCurrentWorld = () => {
        if (this.state.currentWorld === this.state.worldLevelMax[this.state.worldLevelMax.length - 1]) {
            this.setState({ combatInfo: 'You need to kill the boss to go to the next world' })
        }
        else {
            this.setState(prevState => ({
                currentWorld: prevState.currentWorld + 1, combatInfo: 'Going to the next world'
            }));
        }
    }

    updateState = () => {
        this.setState({ playerHP: this.state.playerTest.stats.Life })
        this.updateStats(this.state.playerTest);
    }

    updateStats = (player) => {
        this.getAtk(player)
        this.getDef(player)
        this.getDodge(player)
        this.getCritical(player)
        this.getLife(player)
        player.stats.Level = this.state.levelPlayer
        player.stats.Xp = this.state.xpPlayer
        player.stats.Gold = this.state.gold
    }
    getAtk(player) {
        var resultAtk = Math.round(player.stats.BaseAtk)
        for (let i = 0; i < this.state.arrayItem.length; i++) {
            resultAtk += this.state.arrayItem[i].atk
        }
        player.stats.Atk = resultAtk
    }

    getDef(player) {
        var resultDef = Math.round(player.stats.BaseDef)
        for (let i = 0; i < this.state.arrayItem.length; i++) {
            resultDef += this.state.arrayItem[i].def
        }
        player.stats.Def = resultDef
    }

    getDodge(player) {
        var resultDodge = player.stats.BaseDodge
        for (let i = 0; i < this.state.arrayItem.length; i++) {
            resultDodge += this.state.arrayItem[i].dodge
        }
        player.stats.Dodge = resultDodge
    }

    getLife(player) {
        var resultLife = Math.round(player.stats.BaseLife)
        for (let i = 0; i < this.state.arrayItem.length; i++) {
            resultLife += this.state.arrayItem[i].life
        }
        player.stats.Maxlife = resultLife
    }

    getCritical(player) {
        var resultCritical = player.stats.BaseCritical
        for (let i = 0; i < this.state.arrayItem.length; i++) {
            resultCritical += this.state.arrayItem[i].critical
        }
        player.stats.Critical = resultCritical
    }

    checkIfBuyable = (cost) => {
        if (cost > this.state.gold) {
            this.setState({ combatInfo: 'Too broke...' })
            return false;
        }
        return true;
    }


    lostGold = (gold) => {
        this.setState((prevState) => ({ gold: prevState.gold - gold }))
    }

    float2int = (value) => {
        return value | 0;
    }


    healMySelf = (character) => {
        character.stats.Life += 100
        if (character.stats.Life > character.stats.Maxlife) {
            character.stats.Life = character.stats.Maxlife
        }
        this.setState({ playerHP: character.stats.Life, combatInfo: 'You healed yourself' })
    }

    createCombat = (player, monster, callback) => {
        if (this.state.isFarming === true) {
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
                this.setState({ gold: player.stats.Gold, combatInfo: 'You are dead. Heal yourself before going back. You killed ' + this.state.counter + ' monster. You lost ' + goldLost + ' gold.', displayPlayer: '/img/monsterdead.gif' })
                this.setState((prevState) => ({ isFarming: !prevState.isFarming }))
            }
        }
        else {
            this.setState({ combatInfo: 'Farm interrupted...' })
        }
    }

    playerAlive = (player, monster, callback) => {
        setTimeout(() => callback(player.stats.Username + ' is going to attack !'), 500)
    }

    bothAlive = (player, monster, callback) => {
        if (monster.stats.Alive) {
            setTimeout(() => callback(player.Attack(monster)), 1000)
        }
        else {
            this.setState({ displayMonster: "/img/monster.gif" })
            monster.stats.Life = 80 * this.state.currentWorld
            monster.stats.Atk = (monster.stats.BaseAtk * this.state.currentWorld) + (10 * player.stats.Level)
            monster.stats.Def = (monster.stats.BaseDef * this.state.currentWorld) + (10 * player.stats.Level)
            monster.stats.Dodge = (50 * this.state.currentWorld) + (10 * player.stats.Level)
            monster.stats.Critical = (50 * this.state.currentWorld) + (10 * player.stats.Level)
            this.setState({ monsterHP: monster.stats.Life, combatInfo: 'Another monster is coming !' })
            setTimeout(() => callback(player.Attack(monster)), 1000)
        }
    }

    monsterAlive = (player, monster, callback) => {
        this.setState({ monsterHP: monster.stats.Life })

        if (monster.stats.Alive) {
            setTimeout(() => callback(monster.Attack(player)), 1000)
        } else {
            const goldEarned = monster.randomInt(100) * this.state.currentWorld
            const xpEarned = 50
            this.setState({ counter: this.state.counter + 1, gold: this.state.gold + goldEarned, xpPlayer: this.state.xpPlayer + xpEarned })
            player.stats.Gold = this.state.gold
            player.stats.Xp = this.state.xpPlayer
            if (player.stats.Xp >= 300 * player.stats.Level) {
                player.stats.Level += 1
                this.setState({ xpPlayer: 0, levelPlayer: player.stats.Level })
                player.stats.Xp = this.state.xpPlayer
                player.stats.BaseAtk *= 1.1
                player.stats.BaseDef *= 1.1
                player.stats.BaseLife *= 1.05
                this.updateStats(player)
                this.setState({ displayMonster: '/img/monsterdead.gif' })
                setTimeout(() => callback('You killed a monster. You earned ' + goldEarned + ' gold. Level up !'), 1000)
            }
            else {
                this.setState({ displayMonster: '/img/monsterdead.gif' })
                setTimeout(() => callback('You killed a monster. You earned ' + goldEarned + ' gold and ' + xpEarned + ' XP.'), 1000)
            }
        }
    }

    checkPlayerAlive = (player, monster) => {
        if (player.stats.Alive) {
            this.setState({ displayMonster: "/img/monster.gif", isFarming: !this.state.isFarming, displayPlayer: "img/player.gif" })
            setTimeout(() => this.testCombat2(player, monster, messageInfo => { this.setState({ combatInfo: messageInfo }) }), 1000)
        }
        else {
            this.setState({ combatInfo: 'You should rest...' })
        }
    }

    checkPlayerAliveBoss = (player, boss) => {
        if (this.state.counter >= 30) {
            if (player.stats.Alive) {
                boss.stats.Life = boss.stats.BaseLife
                this.setState({ combatInfo: 'The ultimate battle begin !', displayMonster: boss.stats.Img, displayPlayer: "img/player.gif" })
                setTimeout(() => this.testCombatBoss(player, boss, messageInfo => { this.setState({ combatInfo: messageInfo }) }), 1000)
            }
            else {
                this.setState({ combatInfo: 'You should rest...' })
            }
        }
        else {
            this.setState({ combatInfo: 'You need to kill 30 monsters to fight the boss' })
        }

    }

    createCombatBoss = (player, boss, callback) => {
        this.setState({ playerHP: player.stats.Life })
        this.setState({ monsterHP: boss.stats.Life })
        if (player.stats.Alive) {
            setTimeout(() => callback('Your hands are shaking but you can\'t go back'), 1000)
        } else {
            player.stats.Gold = this.state.gold
            const goldLost = Math.round(player.stats.Gold / 10)
            player.stats.Gold -= goldLost
            this.setState({ gold: player.stats.Gold, })
            setTimeout(() => this.setState({ combatInfo: 'You got destroyed. ' + boss.stats.Username + ' stole you ' + goldLost + ' gold.' }), 1000)
        }

    }

    bossAlive = (player, boss, callback) => {
        if (boss.stats.Alive) {
            setTimeout(() => callback(player.Attack(boss)), 1000)
        }
    }

    playerAliveBoss = (player, boss, callback) => {
        this.setState({ monsterHP: boss.stats.Life })

        if (boss.stats.Alive) {
            setTimeout(() => callback(boss.Attack(player)), 1000)
        }
        else {
            const weaponDrop = player.randomInt(100)
            if (weaponDrop <= 1 * this.state.currentWorld) {
                const arrayType = ['Leggings', 'Helmet', 'Breastplate', 'Shield', 'Shoes', 'Weapon']
                const typeRandom = player.randomInt(5)
                const reward = new Equipement('1/6 of the relic panoply', 'img/legendary.png', arrayType[typeRandom], 10, 10, 10, 10, 10, 'You are not gonna sell it')
                inventoryEquipementSaver.addOnFreePlace(reward)
                this.setState({ combatInfo: 'You did it. Congratulation ! You unlocked the next world ! ' + boss.stats.Username + ' left something...', counter: 0 })
            }
            else {
                this.setState({ combatInfo: 'You did it. Congratulation ! You unlocked the next world !', counter: 0 })
            }
            if (this.state.currentWorld === this.state.worldLevelMax[this.state.worldLevelMax.length - 1]) {
                this.state.worldLevelMax.push(this.state.worldLevelMax[this.state.worldLevelMax - 1] + 1)
            }
        }
    }

    testCombatBoss = (player, boss, callback) => {
        this.createCombatBoss(player, boss, message => {
            this.setState({ combatInfo: message })

            this.bossAlive(player, boss, message2 => {
                this.setState({ combatInfo: message2 })

                this.playerAliveBoss(player, boss, message3 => {
                    this.setState({ combatInfo: message3 })

                    this.testCombatBoss(player, boss)
                })
            })
        })
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

    saveAll() {

    }

    render() {
        return (
            <div>
                {/* <Sound
                    url={soundfile}
                    playStatus={Sound.status.PLAYING}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                /> */}
                <div className="d-flex justify-content-around">
                    <h1 className="my-3 text-white text-center">Farming in a Nutshell</h1>
                    <p className="my-3 text-white text-center"> Current world : {this.state.currentWorld}</p>
                    <img src={this.state.keyPad} alt='lol' width={50} height={50}></img>
                    <Button className="btn btn-logout btn-warning mt-3" onClick={() => saveplease(this.state.playerTest).bind(this)} >Save</Button>
                    <a className="btn btn-logout btn-danger mt-3" onClick={() => (localStorage.clear())} href="/"  >Logout</a>
                </div>
                <div className="mt-5 border py-3  mx-3">
                    <Grid className="d-flex text-white">
                        {/*Game scene*/}
                        <div className="border col-6">
                            <div className=" row h-30">
                                <div className="col w-100">
                                    <img className="imgbottom" src={this.state.displayPlayer} alt="Player" />
                                </div>
                                <div className="col w-100 text-center">
                                    <img width="200px" className="displaySkill" src={this.state.displaySkill} alt="" />
                                </div>
                                <div className="col w-100 ">
                                    <img src={this.state.displayMonster} alt="Monster" />
                                </div>
                            </div>
                            {/* <img src={this.state.keyPad} alt='lol' width={50} height={50}></img> */}
                            <div className="gameplay-infos border py-3 px-3">
                                <p>{this.state.combatInfo}</p>
                            </div>
                            <br />
                            <div className="d-flex justify-content-around">
                                <div className="gameplay-infos border py-3 px-3 col">
                                    <p>Player HP : {this.state.playerHP}</p>
                                </div>
                                <br />
                                <div className="gameplay-infos border py-3 px-3 col">
                                    <p>Monster HP : {this.state.monsterHP}</p>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-around">
                                <div className="gameplay-infos border py-3 px-3 col">
                                    <p>Gold : {Math.round(this.state.gold)}</p>
                                </div>
                                <div className="gameplay-infos border py-3 px-3 col">
                                    <p>Monster killed : {this.state.counter}</p>
                                </div>
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
export { itemsEquips }