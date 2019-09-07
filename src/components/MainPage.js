import React, { Component } from "react"
import { Tab, Tabs, Cell, Grid, Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Link } from 'react-mdl'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap'
import LoginForm from "./forms/LoginForm"
import SigninForm from "./forms/SigninForm"


class MainPage extends Component {
    constructor() {
        super()
        this.state = { activeTab: 0}
    }

    handleLoginState = () => {
        this.setState({
            activeTab : 0
        })
        console.log(this.state.activeTab)
    }

    handleSigninState = () => {
        this.setState({
            activeTab : 1
        })
        console.log(this.state.activeTab)
    }

    toggleForm() {
        if(this.state.activeTab === 0) {
            return(
            <div name='LoginForm'>
                <LoginForm/>
            </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
            <div name='SinginForm'>
                <SigninForm/>
            </div>
            )
        }
    }

    render() {
        return(
        <div className="home-background">
            <h1 className="pt-5 text-white text-center">Farming in a Nutshell</h1>
            <div className="col-6 home mt-5 py-3 px-3">
            <Container>
                <div className="form-header d-flex justify-content-around w-100 pb-3">
                    <Button onClick={this.handleLoginState}>Log in</Button>
                    <Button onClick={this.handleSigninState}>Sign in</Button>
                </div>
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            { this.toggleForm() }
                        </div>
                    </Cell>
                </Grid>
            </Container>
            </div>
        </div>
        )
    }
}

export default MainPage