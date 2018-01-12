import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import StockViewerContainer from '../containers/StockViewerContainer';
import DateContainer from '../containers/DateContainer';
import Home from './Home';
import TradeContainer from '../containers/TradeContainer';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

const sections = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar sections={sections} colorStyle="navbar-inverse" />
      <div className="row">
        <div className='col-md-4'>
          <StockViewerContainer /> 
        </div>
      <div className='col-md-8'>
        <DateContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trade" component={TradeContainer} />
          <Route exact path="/trade/:ticker" component={TradeContainer} />
        </Switch>
        
      </div>
        </div>
      </div>

    );
  }
}

export default App;
