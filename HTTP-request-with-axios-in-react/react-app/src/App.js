import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from "./FormComponent";
import PostComponent from "./PostComponent";
import NavBar from "./nav-layout/layout";
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
            <div className="App">
                <NavBar/>
                <LoginComponent/>
            </div>
        );
    }
}

export default App;
