import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {LoginForm} from "./auth/LoginComponent";
import Register from "./auth/RegisterComponent";
import LoginComponent from "./login-layout/login";

class App extends Component {
    constructor() {
        super()
        this.state = {
            curTime: '',
            name: ''
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={LoginForm} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/login" component={LoginForm} />
                </div>
            </Router>
        );
    }
}

export default App;
