import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

// for now, don't handle any actions. just return the state given to us
const blankReducer = function (state = {}, action) {
  switch (action.type) {
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  blankReducer: blankReducer,
  routing: routeReducer
});

export default rootReducer;
