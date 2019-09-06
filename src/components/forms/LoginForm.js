import React, { Component } from "react";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap'

class LoginForm extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h3 className="text-center">Login</h3>
                <Form className="form">
                <Col>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input
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
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                    />
                    </FormGroup>
                </Col>
                <Container className="text-center">
                    <a className="btn btn-primary" href="/game">Play</a>
                </Container>
                </Form>
            </div>
        )
    }
}

export default LoginForm