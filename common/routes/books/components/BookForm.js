import React, { Component, PropTypes } from 'react';

export default class BookList extends Component {
  submit(e) {
    e.preventDefault();

    let input = this.refs['book-title-input'];

    // passed in by action creator
    this.props.createBook(input.value);

    // clear node value
    input.value = '';
  }

  render() {
    return (
      <form className="book-form form-inline">
        <h2>Create a New Book</h2>
        <div className="form-group">
          <label className="sr-only" for="book-title">Title</label>
          <input id="book-title" className="form-control" type="text" name="title" placeholder="Book Title" ref="book-title-input" />
        </div>
        <button className="btn btn-default" onClick={this.submit.bind(this)}>Create Book</button>
      </form>
    );
  }
};
