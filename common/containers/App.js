import React, { Component, PropTypes } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
};

export default App;
