import React, { Component } from "react";
import { Button, Label } from 'reactstrap'
import Dashboard from './Dashboard'

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
                <header className="container">
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
                    <div className=" row h-30">
                        <div className="col w-100">
                            <Button id="ready-button" color={this.state.rdyBtnColor} onClick={this.onClickReady} >Ready</Button>
                        </div>
                        <div className="col w-100">
                            <Button onClick={this.props.startGame}>Farm</Button>
                        </div>
                        <div className="col w-100">
                            <Button onClick={this.props.startBoss}>Fight boss</Button>
                        </div>
                        <div className="col w-100">
                            <Button color="success" onClick={this.props.selfHealing}>Free potion</Button>
                        </div>
                    </div>




                </div>
            </div >
        )
    }
}

export default Room