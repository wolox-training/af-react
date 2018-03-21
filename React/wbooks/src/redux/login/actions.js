import { push } from 'react-router-redux';

import api from '../../Config/api';
import userService from '../../Services/LoginService';
import localStorage from '../../Services/LocalStorage';

export const userActions = { login: 'LOGIN', loginSuccess: 'LOGINSUCCESS', loginFailure: 'LOGINFAILURE' };

export default {
  login: (email, password) => async dispatch => {
    dispatch({ type: userActions.login });
    try {
      const response = await userService.login(email, password);
      if (response.ok) {
        localStorage.setSessionToken(response.data.access_token);
        api.setHeader('Authorization', response.data.access_token);
        dispatch(push('/dashboard'));
      }
    } catch (e) {
      dispatch(userActions.loginFailure);
    }
  }
};

/*
login(authData, isBackoffice) {
    return async dispatch => {
      dispatch({ type: actions.LOGIN });
      try {
        const response = await AuthService.login(authData, isBackoffice);
        const { headers } = response;
        if (response.ok && headers) {
          if (response.data.data.contract_version || isBackoffice) {
            AuthService.setCurrentUser({ ...response.data.data, ...headers }, isBackoffice);
          } else {
            AuthService.setHeaders({ ...response.data.data, ...headers });
          }
          dispatch(privateActionCreators.loginSuccess({ ...response.data.data, isBackoffice }, headers));
        } else {
          const error = Error(response.data ? response.data.errors : i18next.t('Login:connectionError'));
          dispatch(privateActionCreators.loginFailure(error.message));
        }
      } catch (e) {
        dispatch(privateActionCreators.loginFailure(e));
      }
    };
  },
  */
