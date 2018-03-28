import { authActions } from './actions';

/* ------------- Auth reducer ------------- */
const initialState = {
  logState: {
    logging: false,
    loginFail: false,
    logout: false,
    signing: false,
    signupfail: false
  }
};

/* eslint-disable complexity */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case authActions.login: {
      return {
        ...state,
        logState: {
          logging: true,
          loggedIn: false,
          loginFail: false
        }
      };
    }
    case authActions.loginFailure: {
      return {
        ...state,
        logState: {
          logging: false,
          loggedIn: false,
          loginFail: true
        }
      };
    }
    case authActions.loginSuccess: {
      return {
        ...state,
        logState: {
          logging: true,
          loggedIn: true,
          loginFail: false
        }
      };
    }
    case authActions.logout: {
      return {
        ...state,
        logState: {
          logout: true,
          signing: false,
          signupfail: false
        }
      };
    }
    case authActions.signup: {
      return {
        ...state,
        signState: {
          logout: false,
          signing: true,
          signupfail: false
        }
      };
    }
    case authActions.signupFailure: {
      return {
        ...state,
        signState: {
          logout: false,
          signing: false,
          signupfail: true
        }
      };
    }
    case authActions.signupSuccess: {
      return {
        ...state,
        signState: {
          logout: false,
          signing: false,
          signupfail: false
        }
      };
    }
    default: {
      return state;
    }
  }
}
