import React, { Component } from "react";
import { Button, Input, Label } from 'reactstrap'

class Room extends Component {
    state = {
        rdyBtnColor: "warning"
    }

    onClickReady = () => {
        if (this.state.rdyBtnColor === "warning") {
            this.setState({
                rdyBtnColor: "success"
            })
        }
        else {
            this.setState({
                rdyBtnColor: "warning"
            })
        }
    }

    render() {
        return (
            <div id="Room">
                <header class="container">
                    <Label for="exampleSelect">Selection du monde</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Monde 1</option>
                        <option>Monde 2</option>
                        <option>Monde 3</option>
                        <option>Monde 4</option>
                        <option>Monde 5</option>
                    </Input>
                </header>
                <div id="list-pseudo">
                    <h4>Joueur</h4>
                    <ul>
                        <li>Joueur 1</li>
                        <li>Joueur 2</li>
                        <li>Joueur 3</li>
                        <li>Joueur 4</li>
                    </ul>
                    <Button id="ready-button" color={this.state.rdyBtnColor} onClick={this.onClickReady} >Ready</Button> <br/><br/><br/>
                    <Button onClick={this.props.startGame}>Begin</Button> <br/><br/><br/>
                    <Button color="success" onClick={this.props.selfHealing}>Free potion</Button>
                </div>
            </div >
        )
    }
}

export default Room