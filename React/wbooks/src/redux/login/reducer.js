import PropTypes from 'prop-types';

import { userActions } from './actions';

/* ------------- Auth reducer ------------- */
const initialState = {
  loading: false
};

/* eslint-disable complexity */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case userActions.login: {
      return state.merge({ loading: true });
    }
    case userActions.loginFailure: {
      return state.merge({ loading: false });
    }
    case userActions.loginSuccess: {
      return state.merge({ loading: false });
    }
    default: {
      return state;
    }
  }
}

/*
    case actions.AUTH_INIT: {
      return state.merge({
        initialLoading: false,
        currentUser: action.payload.user
      });
    }
    case actions.LOGIN: {
      return state.merge({ loading: true });
    }
    case actions.RECOVER_PASSWORD: {
      return state.merge({ loading: true });
    }
    case actions.CLOSE_MODAL: {
      return state.merge({ modalIsOpen: false });
    }
    case actions.RECOVER_PASSWORD_SUCCESS: {
      return state.merge({ loading: false });
    }
    case actions.RECOVER_PASSWORD_FAILURE: {
      return state.merge({ loading: false });
    }
    case actions.MAIL_REQUESTED: {
      return state.merge({
        loading: false,
        modalIsOpen: action.payload.val,
        modalTitle: action.payload.modalTitle,
        modalText: action.payload.modalText,
        redirectToLogin: action.payload.redirectToLogin
      });
    }
    case actions.LOGIN_SUCCESS: {
      return state.merge({
        loading: false,
        currentUser: action.payload.authData,
        err: null,
        headers: action.payload.headers
      });
    }
    case actions.HEADERS_SETTER: {
      return state.merge({
        headers: action.payload.headers
      });
    }
    case actions.LOGIN_FAILURE: {
      return state.merge({
        loading: false,
        currentUser: null,
        err: action.payload.err
      });
    }
    case actions.SETPASS_FAILURE: {
      return state.merge({
        loading: false,
        currentUser: null,
        err: !!action.payload.err
      });
    }
    case actions.LOGOUT: {
      return state.merge({ loading: false, currentUser: null });
    }
    case actions.CLEAR_ERROR: {
      return state.merge({ err: null });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

/* ------------- Auth propTypes ------------- */
export const propTypes = {
  loading: PropTypes.bool.isRequired,
  initialLoading: PropTypes.bool.isRequired
};

export const currentUserPropTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  company_id: PropTypes.number,
  rut: PropTypes.string,
  company_brand_name: PropTypes.string
};
