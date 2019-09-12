import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GamePage from './components/GamePage';
import testCombat from './components/characters/testCombat'
import { resolve } from 'path';


class App extends Component {

  // DEBUT TEST 2

  // createCombat = (player) => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.setState({combatInfo: 'The battle begin'})), 2000)
  //   })
  // }

  // playerAlive = (player, monster) => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.setState({combatInfo: ' is going to attack !'})), 2000)
  //   })
      
  // }

  // bothAlive = (player, monster) => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.setState({combatInfo: player.Attack(monster)})), 2000)
  //   })  
  // }

  // monsterAlive = (player, monster) => {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.setState({combatInfo: monster.Attack(player)})), 2000)
  //   })   
  // }

  // testCombat2 = (player, monster, callback) => {
  //   const playerTest = new Player(player)
  //   const monsterTest = new Monster(monster)
  //   return this.createCombat(playerTest).then(this.playerAlive(playerTest, monsterTest)).then(this.bothAlive(playerTest, monsterTest)).then(this.monsterAlive(playerTest, monsterTest))
  // }

  // FIN TEST 2

  render() {
    return ( 
      <div className="main-div">
          <Router>
            {/* Routing */}
            <Route exact path="/" component={MainPage} />
            <Route path="/game" render={(props) => <GamePage {...props} />}/>
            <Route path="/test" component={testCombat} />
        </Router>
      </div>
    );
  }  
}

export default App;
