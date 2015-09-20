import React from 'react';
import {Route, IndexRoute} from 'react-router';

// components
import App from '../containers/App';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Settings from '../components/Settings';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='login' component={Login} />
    <Route path='signup' component={Register} />
    <Route path='settings' component={Settings} />
  </Route>
);
