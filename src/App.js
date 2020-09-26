import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';

function App(){
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
        </Switch>
        <p className="footer">made by kamille suayan</p>
      </Router>
    </>
  )
}

export default App;

