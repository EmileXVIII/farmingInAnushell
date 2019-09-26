import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import {
    Container, Col, Form, Button,
    FormGroup, Label, Input
} from 'reactstrap'
import axios from "axios";
var passwordHash = require('password-hash');

let userLogin = {
    email: '',
    password: '',
}

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.getbdpwd = this.getbdpwd.bind(this)

        this.state = {
            dbpwd: '',
            email: '',
            password: '',
            loginError: '',
            progressbar: '',
            btnstatus: false,
        }
    }

    getbdpwd() {
        axios
            .get(`http://localhost:8080/user/${this.state.email}/pwd`)
            .then(response => {
                // create an array of contacts only with relevant data
                const result = response.data.data.map(c => {
                    return c.mdp
                });
                this.setState({
                    dbpwd: result[0]
                })
            })
            .catch(error => console.log(error));
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
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            email: userLogin.email,
            password: userLogin.password,
            btnstatus: true
        })
        this.getbdpwd()
        setTimeout(() => this.login(), 3000)
        this.setState({
            loginError: 'Conection processing, please wait.',
        })
    }

    loginRedirect = () => {
        return <Redirect to='/game' />
    }

    login() {
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({
                loginError: 'You need to complete all the fields.',
                btnstatus: false
            })
            console.log(this.state.loginError)

        } else {
            if (passwordHash.verify(this.state.password, this.state.dbpwd)) {
                this.setState({
                    redirectToLogin: true,
                    loginError: "Successful login : " + this.state.email + " !"
                })
                console.log(this.state.loginError)
            }
            else {
                this.setState({
                    loginError: 'Invalid authentication.',
                    btnstatus: false
                })
                console.log(this.state.loginError)
            }
        }

    }


    render() {
        if (this.state.redirectToLogin) {
            return this.loginRedirect()
        }

        return (
            <div>
                <h3 className="text-center">Log In</h3>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input

                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                value={this.state.email}
                                onChange={evt => this.handleChange(evt)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={this.state.password}
                                onChange={evt => this.handleChange(evt)}
                            />
                        </FormGroup>
                    </Col>
                    <div className="error-display text-warning my-3 text-center">
                        {this.state.progressbar}
                        {this.state.loginError}
                    </div>
                    <Container className="text-center">
                        <Button
                            href="/game"
                            disabled={this.state.btnstatus}
                            onClick={(e) => this.onSubmit(e)}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Play
                    </Button>
                    </Container>
                </Form>
            </div>
        )
    }
}

export default LoginForm