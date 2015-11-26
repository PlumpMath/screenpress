import Immutable from 'immutable';

let defaultState = [];

const book = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        id: action.id,
        title: action.title,
        date: action.date
      };
    default:
      return state;
  }
};

const books = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        book(undefined, action)
      ];
    default:
      return state;
  }
};

export default books;
