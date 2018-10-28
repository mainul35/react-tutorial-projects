import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      curTime: ''
    }
  }

  componentDidMount(){
    setInterval(function(){
      this.setState({
          curTime: new Date().toLocaleString()
      })
    }.bind(this), 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to react</h1>
          <h4>{this.state.curTime}</h4>
        </header>
      </div>
    );
  }
}

export default App;
