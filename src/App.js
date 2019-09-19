import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GamePage from './components/GamePage';
import { resolve } from 'path';
import Saver from './components/gameplay/inventory.dir/Saver'
import ShopSaver from "./components/gameplay/Shop/ShopSaver"
import test from './components/gameplay/inventory.dir/test';

let lenInvExpendable = 8,
  lenInvEquipement = 3 * 8,
  inventoryEquipementSaver = new Saver('conteneur_inventaire', lenInvEquipement),
  inventoryExpendableSaver = new Saver('conteneur_activables', lenInvExpendable),
  shopSaver = new ShopSaver();
test(inventoryEquipementSaver,inventoryExpendableSaver);

class App extends Component {

  render() {
    return (
      <div className="main-div">
        <Router>
          {/* Routing */}
          <Route exact path="/" component={MainPage} />
          <Route path="/game" render={(props) => <GamePage {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
export { lenInvEquipement, lenInvExpendable, inventoryEquipementSaver, inventoryExpendableSaver, shopSaver };
