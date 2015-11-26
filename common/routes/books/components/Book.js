import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    var book = this.props.book;
    return (
      <div className="book">
        <h2><Link to="/books/{book.id}">{book.title}</Link></h2>
      </div>
    );
  }
};
