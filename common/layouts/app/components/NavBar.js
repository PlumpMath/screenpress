import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    );
  }
}
