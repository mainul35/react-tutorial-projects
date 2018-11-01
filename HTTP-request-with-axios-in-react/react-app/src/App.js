import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {LoginFormComponent} from "./LoginFormComponent";
import PostComponent from "./PostComponent";


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
                <LoginFormComponent/>
                <hr/>
                <PostComponent/>
            </div>
        );
    }
}

export default App;
