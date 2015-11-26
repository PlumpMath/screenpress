import Book from './Book';
import React, { Component, PropTypes } from 'react';

export default class BookList extends Component {
  render() {
    return (
      <div className="books">
        { this.props.books.map((book) => <Book key={book.id} book={book}/>) }
      </div>
    );
  }
};
