import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';


const App = () => {
  return (
    <div className="App">
      <Route path='/' component={LandingPage} />
    </div>
  )
}

export default App;
