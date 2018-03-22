import { userActions } from './actions';

/* ------------- Auth reducer ------------- */
const initialState = {
  logState: {
    logout: false
  }
};

/* eslint-disable complexity */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case userActions.logout: {
      return { ...state, logState: { logout: true } };
    }
    default: {
      return state;
    }
  }
}
