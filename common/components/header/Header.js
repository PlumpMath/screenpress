import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo"></div>
        <NavBar />
      </header>
    );
  }
}
