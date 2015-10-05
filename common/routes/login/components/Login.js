import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label for="email" className="control-label">Username or Email</label>
            <input id="email" type="text" className="form-control" name="username" placeholder="username or email" />
          </div>
          <div className="form-group">
            <label for="password" className="control-label">Password</label>
            <input id="password" type="password" className="form-control" name="password" placeholder="password" />
          </div>
          <input className="btn btn-default" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
