import React, { Component, PropTypes } from 'react';

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label for="email" className="control-label">Email</label>
            <input id="email" className="form-control" type="text" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label for="username" className="control-label">Username</label>
            <input id="email" className="form-control" type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label for="password" className="control-label">Password</label>
            <input id="password" className="form-control" type="password" name="password" placeholder="password" />
          </div>
          <input className="btn btn-default" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}
