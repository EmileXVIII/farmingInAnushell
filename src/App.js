import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GamePage from './components/GamePage';
import { Redirect } from 'react-router-dom'
import Saver from './components/gameplay/inventory.dir/Saver'
import ShopSaver from "./components/gameplay/Shop/ShopSaver"
import test from './components/gameplay/inventory.dir/test';
import Merger from './components/items/expendable.dir/merger';
import Store from './components/gameplay/Room/Store'
import Axios from 'axios';
import Equipement from './components/items/Equipement';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let lenInvExpendable = 8,
  lenInvEquipement = 3 * 8,
  inventoryEquipementSaver = new Saver('conteneur_inventaire', lenInvEquipement),
  inventoryExpendableSaver = new Saver('conteneur_activables', lenInvExpendable),
  shopSaver = new ShopSaver(),
  gestionnaireMergePotion = new Merger();
test(inventoryEquipementSaver, inventoryExpendableSaver);

const serveur = `localhost:8080`
let idPerso = []
let userPseudo = []

let arrayItems = []
let arrayShop = []

function generateShop() {
  for (let i = 0; i < 6; i++) {
    const rand = getRandomIntInclusive(0, arrayItems.length - 1)
    arrayShop[i] = arrayItems[rand]
  }
  localStorage.setItem("arrayShopCache", JSON.stringify(arrayShop))
  console.log("oui", JSON.parse(localStorage.getItem("arrayShopCache")))
}

class App extends Component {
  constructor() {
    super()
    this.redir = ''
  }

  async getItems() {
    let res = await Axios
      .get(`http://${serveur}/getItems`)
      .then(response => {
        // create an array of contacts only with relevant data
        const result = response.data.data;
        return result
      })
    const arrayItem = []
    res.forEach(element => {
      arrayItem.push(new Equipement(element.name, element.urlIcon, element.type, element.life, element.att, element.def, element.dodg, element.crit, element.description))
    })
    arrayItems = arrayItem
    if (JSON.parse(localStorage.getItem("arrayShopCache")) === null) {
      generateShop()
    } else {
      const arrayShopCache = JSON.parse(localStorage.getItem("arrayShopCache"))
      arrayShop = []
      arrayShopCache.forEach(element => {
        arrayShop.push(new Equipement(element.infos.name, element.infos.iconAdresse, element.type, element.life1, element.atk1, element.def1, element.dodge1, element.critical1, element.infos.description))
      })
    }
  }

  render() {

    if (localStorage.getItem("idPerso") !== null) {
      idPerso[0] = localStorage.getItem("idPerso")
      userPseudo[0] = localStorage.getItem("userPseudo")
      this.redir = <Redirect to='/game' />
    } else if (localStorage.getItem("idPerso") === null) {
      this.redir = <Redirect to='/' />
    }
    this.getItems()
    return (
      <div className="main-div">
        <Store>
          <Router>
            {/* Routing */}
            {this.redir}
            <Route exact path="/" component={MainPage} />
            <Route path="/game" render={(props) => <GamePage {...props} />} />
          </Router>
        </Store>
      </div>
    );
  }
}

export default App;
export {
  lenInvEquipement,
  lenInvExpendable,
  inventoryEquipementSaver,
  inventoryExpendableSaver,
  shopSaver,
  idPerso,
  serveur,
  gestionnaireMergePotion,
  userPseudo,
  arrayItems,
  arrayShop,
  generateShop,
};
