import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
import { Col, Button } from 'reactstrap'
import Inventory from "./gameplay/Inventory";
import Character from "./gameplay/Character";
import Wrought from "./gameplay/Wrought";
import Shop from "./gameplay/Shop";

class GamePage extends Component {
    constructor() {
        super()
        this.state = { gameplayElement: 0}
    }

    displayInventory = () => {
        this.setState({
            gameplayElement : 0
        })
    }

    displayCharacter = () => {
        this.setState({
            gameplayElement : 1
        })
    }

    displayWrought = () => {
        this.setState({
            gameplayElement : 2
        })
    }

    displayShop = () => {
        this.setState({
            gameplayElement : 3
        })
    }


    toggleElements() {
        if(this.state.gameplayElement === 0) {
            return(
            <>
                <Inventory/>
            </>
            )
        } else if(this.state.gameplayElement === 1) {
            return(
            <>  
                <Character/>
            </>
            )
        } else if(this.state.gameplayElement === 2) {
            return(
            <>
                <Wrought/>
            </>
            )
        } else if(this.state.gameplayElement === 3) {
            return(
            <>
                <Shop/>
            </>
            )
        }
    }

    render() {
        return(
            <>
                <div className="d-flex justify-content-around">
                    <h1 className="my-3 text-white text-center">Farming in a Nutshell</h1>
                    <a className="btn btn-logout btn-warning mt-3" href="/home">Logout</a>
                </div>
                
                <div className= "mt-5 border py-3  mx-3">
                    <Grid className="d-flex text-white">
                        <Col className="border" col={6}>
                            <img src="https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"/>
                        </Col>
                        <Col col={5}>
                            <div className="d-flex justify-content-around mb-5">
                                <Button onClick={this.displayInventory}>Inventory</Button>
                                <Button onClick={this.displayCharacter}>Character</Button>
                                <Button onClick={this.displayWrought}>Wrought</Button>
                                <Button onClick={this.displayShop}>Shop</Button>
                            </div>
                            <Cell className="dynamic-content">
                                { this.toggleElements() }
                            </Cell>
                        </Col>
                    </Grid>
                </div>
            </>
        )
    }
}

export default GamePage