import 'babel-core/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from '../common/store/configureStore';
import { routes } from '../common/routes';

// history only used in client
import { createHistory } from 'history';
let history = createHistory();

// stylesheets
import '../common/assets/stylesheets/main.scss';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('app');

React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <Router history={history} routes={routes} />}
  </Provider>,
  rootElement
);
