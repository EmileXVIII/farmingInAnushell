import React, { Component } from "react";
import { Button, Input, Label } from 'reactstrap'
import Dashboard from './Dashboard'
import Store from './Store'

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
                    <div className="row">
                        <div className="col">
                            <Button onClick={() => this.props.lowerCurrentWorld()}>Previous</Button>
                        </div>
                        <div className="col">
                            <Button onClick={() => this.props.upCurrentWorld()}>Next</Button>
                        </div>
                    </div>
                </header>
                <div id="list-pseudo">
                    <h4>Joueur</h4>
                    <Dashboard />
                    <Button id="ready-button" color={this.state.rdyBtnColor} onClick={this.onClickReady} >Ready</Button> <br /><br /><br />
                    <Button onClick={this.props.startGame}>Farm</Button> <br /><br /><br />
                    <Button onClick={this.props.startBoss}>Fight boss</Button> <br /><br /><br />
                    <Button id="begin-button" onClick={this.props.startGame}>Begin</Button> <br /><br /><br />
                    <Button color="success" onClick={this.props.selfHealing}>Free potion</Button>
                </div>
            </div >
        )
    }
}

export default Room