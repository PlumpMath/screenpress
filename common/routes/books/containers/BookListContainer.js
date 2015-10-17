import React, { Component, PropTypes } from 'react';

export default class BookListContainer extends Component {

  constructor() {
    super();
    this.state = { books: [] }
  }

  componentDidMount() {
    // TODO: get from the server :)
    this.setState({ books: books });
  }
  
  render() {
    return <BookList books={this.state.books} />;
  }
}

}
