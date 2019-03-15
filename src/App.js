import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      informations : "HELLO from front 😀"
    };
  }
  getHello() {
    axios.get('api/messages/hello')
    .then((result) => {
        this.setState({informations : result.data});
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <p>{this.state.informations}</p>
          <br/>
          <button onClick={this.getHello.bind(this)}>Get a message from back</button>
        </header>
      </div>
    );
  }
}

export default App;
