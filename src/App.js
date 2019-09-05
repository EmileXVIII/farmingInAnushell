import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GamePage from './components/GamePage';


function App() {
  return ( 
    <>
        <Router>
          {/* Routing */}
          <Route exact path="/home" component={MainPage} />
          <Route path="/game" component={GamePage} />
      </Router>
    </>
  );
}

export default App;
