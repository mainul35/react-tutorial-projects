import React, {Component} from 'react';
import './App.css';
import {LoginForm} from "./LoginComponent";

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
            <div className="App">
                <LoginForm/>
            </div>
        );
    }
}

export default App;
