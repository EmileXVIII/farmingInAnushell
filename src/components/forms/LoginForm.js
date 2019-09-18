import React, { Component } from "react";
import {
    Container, Col, Form, Button,
    FormGroup, Label, Input
  } from 'reactstrap'
import { Redirect } from 'react-router-dom'


  let loginError = ''

  let user = {
        email : 'florent.nicolas@ynov.com',
        password : 'password'
  }

  let userLogin = {
      email : '',
      password : ''
  }
  

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // Get data from login form
    onSubmit = (e) => {
       e.preventDefault();
       userLogin = {
            email : this.state.email,
            password : this.state.password
       }
       this.setState({
            email: userLogin.email,
            password: userLogin.password
       })
       this.login(user, this.state)
    }


    login(user, currentUser) {
        console.log(currentUser)
        if(currentUser.email.length <= 0 
            || currentUser.password.length <=0) {
            loginError = 'You need to complete all the fields.'
            console.log(loginError)
        }
        else {
            if(currentUser.email === user.email && currentUser.password === user.password) {
                loginError = "Successful login : " + user.email + " !"
                //return <Redirect to='/game' />
            } 
            else {
                loginError = 'Invalid authentication.'
                console.log(loginError)
            }
        }
    }
    

    render() {
        return(
            <div>
                <h3 className="text-center">Log In</h3>
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
                <div className="error-display text-warning my-3 text-center">
                    { loginError }
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

export default LoginForm