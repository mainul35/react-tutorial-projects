import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Alert, Container, Col} from 'reactstrap';
import './LoginFormComponent.css'
import axios from 'axios'

class LoginFormComponent extends Component {

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

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            title: '',
            body: ''
        };

        this.submitPost = this.submitPost.bind(this);
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-2">
                        <h3>Login for Form 2</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" value=""/>
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

export default LoginFormComponent;