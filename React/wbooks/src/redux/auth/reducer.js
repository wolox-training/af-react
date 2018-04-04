import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  login: null,
  logout: false,
  signin: null
};

const initialState = completeState(stateDescription, ['logout']);

const reducerDescription = {
  primaryActions: [actions.LOGIN, actions.SIGNUP],
  override: {
    [actions.LOGOUT]: state => ({ ...state, logout: true })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
