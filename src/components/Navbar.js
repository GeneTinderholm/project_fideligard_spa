import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../stratton_oakmont.png";
import {NavLink} from 'react-router-dom';


const Navbar = ({sections, colorStyle}) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#">
        <img src={logo} className="App-logo"/> {'    '} Fideligard
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
      <NavLink className="nav-link" to='/'>
        Home
      </NavLink>
      <NavLink className="nav-link" to='/trade'>
        Trade
      </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
