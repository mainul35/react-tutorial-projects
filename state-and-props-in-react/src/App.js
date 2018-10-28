import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


const Greeting = (props)=> {
    return <h1>{props.name}</h1>;
}

class App extends Component {

    constructor() {
        super()
        this.state = {
            curTime: '',
            name: ''
        }
    }

    componentDidMount() {
        setInterval(function () {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Welcome <Greeting name='Mainul'/>
                    <h4>{this.state.curTime}</h4>
                </header>
            </div>
        );
    }
}

export default App;
