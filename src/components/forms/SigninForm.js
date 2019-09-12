import React, { Component } from "react";
import {
    Container, Col, Form, Button,
    FormGroup, Label, Input
  } from 'reactstrap'
import User from "../User";
import { Redirect } from 'react-router-dom'
var passwordHash = require('password-hash');

let signinError = ''

let userSignin = {
    email : '',
    username : '',
    password : '',
    confirmPassword : ''
}


class SigninForm extends Component {
    constructor() {
        super()
        this.state = {
            email : '',
            username : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Redirect on Login
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/game' />
        }
      }

    // Get Data from Sign in form 
    onSubmit = (e) => {
       e.preventDefault();
       userSignin = {
        email : this.state.email,
        username : this.state.username,
        password : this.state.password,
        confirmPassword : this.state.confirmPassword
    }
       this.setState({
            email: userSignin.email,
            username : userSignin.username,
            password: userSignin.password,
            confirmPassword : userSignin.confirmPassword
       })
       this.register(this.state)
    }

    hashPassword(password) {
        return passwordHash.generate(password);
    }

    // TODO : Verify if user existing in Database
    register(currentUser) {
        if(currentUser.email.length <= 0 
            || currentUser.username.length <=0
            || currentUser.password.length <=0
            || currentUser.confirmPassword.length <=0) {
            signinError = 'Thank you to complete all the fields.'
            console.log(signinError)
        }
        else {
            if(currentUser.password != currentUser.confirmPassword) {
                signinError = "Both passwords must be identical."
            }
            else {
                if(currentUser.password.length < 8) {
                    signinError = "Your password is not secure enough. Minimum length : 8 characters."
                }
                else {
                    signinError = ""
                    // Hash pwd and User creation
                    let password = this.hashPassword(currentUser.password)
                    const user = new User(currentUser.email, currentUser.username, password)
                    signinError = "Successful registration : " + user.username + " !"
                    // Then store it in database

                    console.log(user)
                    //this.renderRedirect()
                }
            }
            
        }
    }

    render() {
        return(
            <div>
                <h3 className="text-center">Sign In</h3>
                <Form className="form">
                <Col>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input
                        onChange={e => this.handleChange(e)}
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label>Username</Label>
                    <Input
                        onChange={e => this.handleChange(e)}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="mon pseudo deter"
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        onChange={e => this.handleChange(e)}
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Confirm password</Label>
                    <Input
                        onChange={e => this.handleChange(e)}
                        type="password"
                        name="confirmPassword"
                        id="examplePassword2"
                        placeholder="********"
                    />
                    </FormGroup>
                </Col>
                <div className="error-display text-warning my-3 text-center">
                    { signinError }
                </div>
                <Container className="text-center">
                    <Button 
                        onClick={(e) => this.onSubmit(e)}
                        type="submit" 
                        className="btn btn-primary" 
                        href="/game">
                        Play
                    </Button>
                </Container>
                </Form>
            </div>
        )
    }
}

export default SigninForm