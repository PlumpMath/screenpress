import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import books from './books';

const rootReducer = combineReducers({
  routing: routeReducer,
  books: books
});

export default rootReducer;
