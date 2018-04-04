import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  books: null,
  bookDetail: null
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_ALL_BOOKS, actions.GET_BOOK_DETAIL]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
