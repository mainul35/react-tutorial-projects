import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from "./FormComponent";
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
                <FormComponent/>
                <hr/>
                <PostComponent/>
            </div>
        );
    }
}

export default App;
