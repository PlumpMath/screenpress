import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { routes } from '../common/routes';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHistory } from 'history';
import configureStore from '../common/store/configureStore';

// stylesheets
import '../common/assets/stylesheets/main.scss';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const history = createHistory();

syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
