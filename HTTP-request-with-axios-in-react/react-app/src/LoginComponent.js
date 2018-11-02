import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Alert, Container, Col} from 'reactstrap';
import './LoginComponent.css'
import axios from 'axios'


const cred = {
    email: '',
    password:''
};

class LoginForm extends Component {



    submitPost = () => {

    }

    submitPost = () => {

        let api = axios.create({baseURL: ''});
        let encodedData = btoa(JSON.stringify(this.state));

    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    constructor() {
        super();
        this.state = cred
        this.submitPost = this.submitPost.bind(this);
        this.change = this.change.bind(this)
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 login-form-2">
                        <h3>Login</h3>
                        <form onSubmit={this.submitPost.bind(this)}>
                            <div className="form-group">
                                <input type="text" className="form-control" name='email' onChange={this.change.bind(this)} placeholder="Your Email" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name='password' onChange={this.change.bind(this)} placeholder="Your Password" value=""/>
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