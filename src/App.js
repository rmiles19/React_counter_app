import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter Example</h1>
        </header>
        <div>
          <Counter name="red" />
          <Counter name="green" />
          <Counter name="blue" />
          <Counter name="purple"/>
        </div>
      </div>
    );
  }
}

export default App;