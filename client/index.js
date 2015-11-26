import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { routes } from '../common/routes';
import { syncReduxAndRouter } from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { fromJS } from 'immutable';
import configureStore from '../common/store/configureStore';

// stylesheets
import '../common/assets/stylesheets/main.scss';

const initialState = window.__INITIAL_STATE__;

// Transform initial state from server to Immutable.js collections,
// but leave top level keys untouched for Redux
Object.keys(initialState).forEach(key => {
  initialState[key] = fromJS(initialState[key]);
});

const store = configureStore(initialState);
const history = createBrowserHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
