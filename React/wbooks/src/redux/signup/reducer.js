import { userActions } from './actions';

/* ------------- Auth reducer ------------- */
const initialState = {
  signState: {
    signing: false,
    signupfail: false
  }
};

/* eslint-disable complexity */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case userActions.signup: {
      return { ...state, signState: { signing: true, signupfail: false } };
    }
    case userActions.signupFailure: {
      return { ...state, signState: { signing: false, signupfail: true } };
    }
    case userActions.signupSuccess: {
      return { ...state, signState: { signing: false, signupfail: false } };
    }
    default: {
      return state;
    }
  }
}
