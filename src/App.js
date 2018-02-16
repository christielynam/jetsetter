import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Counter from './containers/Counter';

const App = () => {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <p className='tag-line'>The ultimate app for the travel enthusiast</p>
      <Route path='/' component={Counter} />
    </div>
  )
}

export default App;
