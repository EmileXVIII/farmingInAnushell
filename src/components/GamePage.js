import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
import { Col, Button } from 'reactstrap'
import Inventory from "./gameplay/Inventory";
import Character from "./gameplay/Character/Character";
import Wrought from "./gameplay/Wrought";
import Shop from "./gameplay/Shop/Shop";
import Room from "./gameplay/Room/Room.js"

class GamePage extends Component {
    constructor() {
        super()
        this.state = { gameplayElement: 0 }
    }

    displayInventory = () => {
        this.setState({
            gameplayElement: 0
        })
    }

    displayCharacter = () => {
        this.setState({
            gameplayElement: 1
        })
    }

    displayWrought = () => {
        this.setState({
            gameplayElement: 2
        })
    }

    displayShop = () => {
        this.setState({
            gameplayElement: 3
        })
    }

    displayRoom = () => {
        this.setState({
            gameplayElement: 4
        })
    }

    toggleElements() {
        if (this.state.gameplayElement === 0) {
            return (
                <div>
                    <Inventory />
                </div>
            )
        } else if (this.state.gameplayElement === 1) {
            return (
                <div>
                    <Character />
                </div>
            )
        } else if (this.state.gameplayElement === 2) {
            return (
                <div>
                    <Wrought />
                </div>
            )
        } else if (this.state.gameplayElement === 3) {
            return (
                <div>
                    <Shop />
                </div>
            )
        } else if (this.state.gameplayElement === 4) {
            return (
                <div>
                    <Room />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-around">
                    <h1 className="my-3 text-white text-center">Farming in a Nutshell</h1>
                    <a className="btn btn-logout btn-warning mt-3" href="/home">Logout</a>
                </div>

                <div className="mt-5 border py-3  mx-3">
                    <Grid className="d-flex text-white">
                        {/*Game scene*/}
                        <div className="border col-6">
                            <img width="700" src="/img/gamescene_1.png" />
                            {/*<img src="https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"/>*/}
                            <div class="gameplay-infos border py-3 px-3">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur. </li>
                                    <li>Pellentesque eget iaculis nibh. </li>
                                    <li>Interdum et malesuada fames ac ante ipsum. </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-around mb-5">
                                <Button onClick={this.displayInventory}>Inventory</Button>
                                <Button onClick={this.displayCharacter}>Character</Button>
                                <Button onClick={this.displayWrought}>Wrought</Button>
                                <Button onClick={this.displayShop}>Shop</Button>
                                <Button onClick={this.displayRoom}>Room</Button>
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

export default GamePage