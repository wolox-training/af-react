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
          loginFail: false,
          logout: false,
          signing: false,
          signupfail: false
        }
      };
    }
    case authActions.loginFailure: {
      return {
        ...state,
        logState: {
          logging: false,
          loggedIn: false,
          loginFail: true,
          logout: false,
          signing: false,
          signupfail: false
        }
      };
    }
    case authActions.loginSuccess: {
      return {
        ...state,
        logState: {
          logging: true,
          loggedIn: true,
          loginFail: false,
          logout: false,
          signing: false,
          signupfail: false
        }
      };
    }
    case authActions.logout: {
      return {
        ...state,
        logState: {
          logging: false,
          loggedIn: false,
          loginFail: false,
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
          logging: false,
          loggedIn: false,
          loginFail: false,
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
          logging: false,
          loggedIn: false,
          loginFail: false,
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
          logging: false,
          loggedIn: false,
          loginFail: false,
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
