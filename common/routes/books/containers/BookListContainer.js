import BookList from '../components/BookList';
import React, { Component, PropTypes } from 'react';

export default class BookListContainer extends Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    // do something here
  }

  render() {
    var books = [
      { id: 1, name: 'The Martian', description: 'Mark Watney is a Mars pirate.' },
      { id: 2, name: 'The Girl With All the Gifts', description: 'Crazy.' }
    ];
    return <BookList books={books} />;
  }
};
