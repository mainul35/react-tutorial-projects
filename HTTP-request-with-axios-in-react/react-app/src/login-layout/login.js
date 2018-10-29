import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Alert, Container, Col} from 'reactstrap';
import axios from 'axios'
import './login.css'

export default class LoginComponent extends Component {
    doLogin = () => {
        console.log("DoLogin clicked")
    }

    constructor() {
        super()
        this.doLogin.bind(this)
    }

    render() {
        return (
            <div className="row align-content-center">
                <div className="col-md-2 col-centered" id="global-wrapper">
                        <div className="col-sm-6 col-md-4">
                            <div className="account-wall">
                        <Form onSubmit={this.doLogin.bind(this)} className='form-signin'>
                            <FormGroup row>
                                <Label for="email" sm={4}>Email</Label>
                                <Col sm={8}>
                                    <Input type="email" onChange={e => this.change(e)} name="email" id="email"
                                           placeholder="Email"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={4}>Password</Label>
                                <Col sm={8}>
                                    <Input type="password" onChange={e => this.change(e)} name="password" id="password"
                                           placeholder="Password"/>
                                </Col>
                            </FormGroup>
                            <Button className={'btn btn-primary btn-block'}>Login</Button>
                        </Form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}