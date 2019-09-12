import React, { Component } from "react";
import Player from './Player.js';
import Monster from './Monster.js';

class testCombat extends Component {
    testCombat = () => {
        let counter = 0
        const TM = new Player('TM')
        console.log('The battle begin !')
    
        while (TM.stats.Alive) {
            const florentMonster = new Monster('florent')
    
            while (florentMonster.stats.Alive && TM.stats.Alive) {
                console.log('Player is attacking !')
                TM.Attack(florentMonster)
                if (florentMonster.stats.Alive) {
                    console.log('The monster fight back !')
                    florentMonster.Attack(TM)
                    console.log(TM.stats.Username + ' got ' + TM.stats.Life + ' HP left.')
                }
            }
            counter +=1             
        }
        console.log('Vous êtes mort... Vous avez tué ' + counter + ' Florent')
    }

    render() {
        return <button onClick={this.testCombat}>Test</button>
    }
    
}

export default testCombat
