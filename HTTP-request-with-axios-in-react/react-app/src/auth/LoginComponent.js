import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Alert, Container, Col} from 'reactstrap';
import './LoginComponent.css'
import axios from 'axios'

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password:''
        }
        this.login = this.login.bind(this);
        this.change = this.change.bind(this)
    }

    login = (e) => {
        e.preventDefault()
        let api = axios.create({baseURL: 'http://localhost:8080/'});
        let encodedData = btoa(JSON.stringify(this.state));

        api.post('auth/login?data='+encodedData )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    };

    render() {
        return (
            <div className="container login-container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 login-form-2">
                        <h3>Login</h3>
                        <form onSubmit={e=>this.login(e)}>
                            <div className="form-group">
                                <input type="text" className="form-control" name='email' onInput={e => this.change(e)} placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name='password' onInput={e => this.change(e)} placeholder="Your Password"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login"/>
                            </div>
                            <div className="form-group">
                                <a href="#" className="ForgetPwd" value="Login">Forget Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export {LoginForm};