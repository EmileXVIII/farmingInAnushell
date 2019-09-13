import React, { Component } from "react"
import { Cell, Grid } from 'react-mdl'
import {
    Container,
    Button,
  } from 'reactstrap'
import LoginForm from "./forms/LoginForm"
import SigninForm from "./forms/SigninForm"


class MainPage extends Component {
        state = { activeTab: 'Login'}
    

    toggleForm = () => {
        if (this.state.activeTab == 'Signin') {
            return (
                    <div name='SinginForm'>
                        <SigninForm/>
                    </div>
                )
        }
        else {
            return (
                    <div name='LoginForm'>
                        <LoginForm/>
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
                    <Button onClick={() => this.setState({activeTab: 'Login'})}>Log in</Button>
                    <Button onClick={() => this.setState({activeTab: 'Signin'})}>Sign in</Button>
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