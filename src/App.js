import React, { Component } from 'react';
import './App.css';
import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jetsetter</h1>
        </header>
        <p className='tag-line'>The ultimate app for the travel enthusiast</p>
        <Counter />
      </div>
    );
  }
}

export default App;
