import React, { Component, PropTypes } from 'react';
import { bindActionCreators }          from 'redux';
import { connect }                     from 'react-redux';
import BookList                        from '../components/BookList';
import BookForm                        from '../components/BookForm';
import * as BookActions                from '../actions/BookActions';
import Immutable                       from 'immutable';

// for connecting this smart component to the redux store
const select = (state) => {
  return { books: state.books };
};

class BookListContainer extends Component {
  static propTypes = {
    books: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor() {
    super();
  }

  render() {
    const { books, dispatch } = this.props;
    return (
      <div id="book-list">
        <BookList books={books} />
        <BookForm {...bindActionCreators(BookActions, dispatch)} />
      </div>
    );
  }
};

export default connect(select)(BookListContainer);
