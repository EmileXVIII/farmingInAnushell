import React, { Component } from "react";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap'

class SigninForm extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h3 className="text-center">Sigin</h3>
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
                    <Label>Username</Label>
                    <Input
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
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                    />
                    </FormGroup>
                </Col>
                <Container className="text-center">
                    <a class="btn btn-primary" href="/game">Play</a>
                </Container>
                </Form>
            </div>
        )
    }
}

export default SigninForm