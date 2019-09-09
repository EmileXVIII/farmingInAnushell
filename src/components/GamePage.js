import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
import { Col, Button } from 'reactstrap'
import Inventory from "./gameplay/inventory/Inventory.js";
import CharacterStuff from "./gameplay/CharacterStuff/CharacterStuff.js";
import Wrought from "./gameplay/Wrought";
import Shop from "./gameplay/Shop/Shop";
import Room from "./gameplay/Room/Room.js"

class GamePage extends Component {
    constructor() {
        super()
        this.state = { gameplayElement: 'inventary' }
    }


    toggleElements() {
        switch (this.state.gameplayElement) {
            case 'inventary' :
                return (
                    <div>
                        <Inventory />
                    </div>
                )
            case 'characterStuff' :
                return (
                    <div>
                        <CharacterStuff />
                    </div>
                )
            case 'wrought' :
                return (
                    <div>
                        <Wrought />
                    </div>
                )
            case 'shop' :
                return (
                    <div>
                        <Shop />
                    </div>
                )
            case 'room' :
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
                        <div name='conteneut_interface' className="col-6">
                            <div className="d-flex justify-content-around mb-5">
                                <Button onClick={() => this.setState({gameplayElement: 'inventary'})}>Inventory</Button>
                                <Button onClick={() => this.setState({gameplayElement: 'characterStuff'})}>Character</Button>
                                <Button onClick={() => this.setState({gameplayElement: 'wrought'})}>Wrought</Button>
                                <Button onClick={() => this.setState({gameplayElement: 'shop'})}>Shop</Button>
                                <Button onClick={() => this.setState({gameplayElement: 'room'})}>Room</Button>
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