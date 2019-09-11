import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GamePage from './components/GamePage';
import Saver from './components/gameplay/inventory/Saver';

let lenInvExpendable=8,
lenInvEquipement=3*8, 
inventoryEquipementSaver=new Saver('conteneur_inventaire',lenInvEquipement),
inventoryExpendableSaver=new Saver('conteneur_activables',lenInvExpendable);

function App() {
  return ( 
    <div className="main-div">
        <Router>
          {/* Routing */}
          <Route exact path="/home" component={MainPage} />
          <Route path="/game" component={GamePage} />
      </Router>
    </div>
  );
}

export default App;
export {lenInvEquipement,lenInvExpendable,inventoryEquipementSaver,inventoryExpendableSaver};
