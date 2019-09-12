import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GamePage from './components/GamePage';
import Room from './components/gameplay/Room/Room'
import testCombat from './components/characters/testCombat'
import Player from './components/characters/Player'
import Monster from './components/characters/Monster'
import { resolve } from 'path';


class App extends Component {
  state = {
    combatInfo: 'Waiting...',
    playerTest: new Player('Clement'),
    monsterTest: new Monster('Florent'),
    playerHP: null,
    monsterHP: null,
    counter: 0,
    gold: 0
  }

  // testCombat = () => {
  //   let counter = 0
  //   const TM = new Player('TM')
  //   this.setState({combatInfo: 'The battle begin'})

  //   while (TM.stats.Alive) {
  //       const florentMonster = new Monster('florent')

  //       while (florentMonster.stats.Alive && TM.stats.Alive) {
  //           this.setState({combatInfo: 'Player is attacking !'})
  //           TM.Attack(florentMonster)
  //           if (florentMonster.stats.Alive) {
  //               this.setState({combatInfo: 'The monster fight back !'})
  //               florentMonster.Attack(TM)
  //               this.setState({combatInfo: TM.stats.Username + ' got ' + TM.stats.Life + ' HP left.'})
  //           }
  //       }
  //       counter +=1             
  //   }
  //   this.setState({combatInfo: 'Vous êtes mort... Vous avez tué ' + counter + ' Florent'})
  // }

  //DEBUT TEST 1

  createCombat = (player, monster, callback) => {
    this.setState({playerHP: player.stats.Life})
    this.setState({monsterHP: monster.stats.Life})

    if (player.stats.Alive) {
      if (monster.stats.Alive) {
        setTimeout(() => callback('The battle begin'), 500)
      } else {
        setTimeout(() => callback('...but the farming is never ending !'), 500)
      }     
    } else {
      const goldLost = player.stats.Gold / 10
      player.stats.Gold -= goldLost
      this.setState({gold: player.stats.Gold,})
      this.setState({combatInfo: 'You are dead. Heal yourself before going back. You killed ' + this.state.counter + ' monster. You lost ' + goldLost + ' gold.'})
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
      this.setState({monsterHP: monster.stats.Life, combatInfo: 'Another monster is coming !'})
      setTimeout(() => callback(player.Attack(monster)), 500)  
    }
     
  }

  monsterAlive = (player, monster, callback) => {
    this.setState({monsterHP: monster.stats.Life})

    if (monster.stats.Alive) {
      setTimeout(() => callback(monster.Attack(player)), 500)
    } else {
      const goldEarned = monster.randomInt(100)
      player.stats.Gold += goldEarned
      this.setState({counter: this.state.counter + 1, gold: player.stats.Gold,})
      setTimeout(() => callback('You killed a monster. You earned ' + goldEarned + ' gold'), 500)
    }
    
    
  }

  testCombat2 = (player, monster, callback) => {
    
    this.createCombat(player, monster, message => {
      this.setState({combatInfo: message})
      
      this.playerAlive(player, monster, message2 => {
        this.setState({combatInfo: message2})

        this.bothAlive(player, monster, message3 => {
          this.setState({combatInfo: message3})

          this.monsterAlive(player, monster, message4 => {
            this.setState({combatInfo: message4})

            this.testCombat2(player, monster)
          })
        })
      })
    })
  }

  // FIN TEST 1

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
            <Route path="/game" render={(props) => <GamePage {...props} displayPlayerHP={this.state.playerHP} displayMonsterHP={this.state.monsterHP} displayGold={this.state.gold}displayCombat={this.state.combatInfo} startCombat={() => this.testCombat2(this.state.playerTest, this.state.monsterTest, messageInfo => {
              this.setState({combatInfo: messageInfo}) 
            })} />}/>
            <Route path="/test" component={testCombat} />
        </Router>
      </div>
    );
  }  
}

export default App;
