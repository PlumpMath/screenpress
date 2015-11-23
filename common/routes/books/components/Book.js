import React, { Component, PropTypes } from 'react';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    var book = this.props.book;
    return (
      <div className="book">
        <h2>{book.name}</h2>
        <p>{book.description}</p>
      </div>
    );
  }
};
