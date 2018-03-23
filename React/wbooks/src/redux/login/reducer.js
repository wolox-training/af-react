import { userActions } from './actions';

/* ------------- Auth reducer ------------- */
const initialState = {
  logState: {
    loading: false,
    loggedIn: false,
    loginFail: false
  }
};

/* eslint-disable complexity */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case userActions.login: {
      return { ...state, logState: { loading: true, loggedIn: false, loginFail: false } };
    }
    case userActions.loginFailure: {
      return { ...state, logState: { loading: false, loggedIn: false, loginFail: true } };
    }
    case userActions.loginSuccess: {
      return { ...state, logState: { loading: true, loggedIn: true, loginFail: false } };
    }
    default: {
      return state;
    }
  }
}
