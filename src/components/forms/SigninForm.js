import React, { Component } from "react";
import {
    Container, Col, Form, Button,
    FormGroup, Label, Input
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from "axios";
import { serveur } from "../../App"
var passwordHash = require('password-hash');

let userSignin = {
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
}

// function dbreturn(i, error, username) {
//     if (i) {

//     } else {

//     }
// }


class SigninForm extends Component {
    constructor() {
        super()
        // this.dbreturn = dbreturn.bind(this)
        this.state = {
            signinError: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Redirect on Login
    renderRedirect = () => {
        return <Redirect to='/' />
    }

    // Get Data from Sign in form 
    onSubmit = (e) => {
        e.preventDefault();
        userSignin = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.setState({
            email: userSignin.email,
            username: userSignin.username,
            password: userSignin.password,
            confirmPassword: userSignin.confirmPassword
        })
        this.register(this.state)
    }

    hashPassword(password) {
        return passwordHash.generate(password);
    }

    async register(currentUser) {
        if (currentUser.email.length <= 0
            || currentUser.username.length <= 0
            || currentUser.password.length <= 0
            || currentUser.confirmPassword.length <= 0) {
            this.setState({
                signinError: "Successful registration : " + currentUser.username + " !"
            })
        }
        else {
            if (currentUser.password !== currentUser.confirmPassword) {
                this.setState({
                    signinError: "Both passwords must be identical."
                })
            }
            else {
                if (currentUser.password.length < 8) {
                    this.setState({
                        signinError: "Your password is not secure enough. Minimum length : 8 characters."
                    })
                }
                else {
                    // Hash pwd and User creation
                    const password = this.hashPassword(currentUser.password)
                    // Then store it in database
                    let res = await axios
                        .post(`http://${serveur}/userpost/${currentUser.email}/${currentUser.username}/${password}`)
                        .then(function (response) {
                            console.log(response);
                            return {
                                data: response.data,
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                            return {
                                data: error,
                            }
                        });
                    if (res.data.error === false) {
                        this.setState({
                            signinError: "Your account have been created with succes"
                        })
                    }
                    else if (res.data === `ER_DUP_ENTRY: Duplicate entry '${currentUser.username}' for key 'pseudo'`) {
                        this.setState({
                            signinError: "This username is already used"
                        })
                    } else if (res.data === `ER_DUP_ENTRY: Duplicate entry '${currentUser.email}' for key 'email'`) {
                        this.setState({
                            signinError: "This mail is already used"
                        })
                    } else if (res.data === "ER_DATA_TOO_LONG: Data too long for column 'pseudo' at row 1") {
                        this.setState({
                            signinError: "You're username is too long"
                        })
                    } else {
                        this.setState({
                            signinError: "Un probleme est apparu lors de la creation du compte"
                        })
                        console.log(res.data)
                    }
                }
            }
        }

    }

    render() {
        if (this.state.redirectToLogin) {
            this.renderRedirect()
        }
        return (
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
                        {this.state.signinError}
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