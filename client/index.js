import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
);
