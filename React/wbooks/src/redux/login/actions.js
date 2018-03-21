import { push } from 'react-router-redux';

import api from '../../Config/api';
import history from '../../Config/history';
import userService from '../../Services/LoginService';
import localStorage from '../../Services/LocalStorage';

export const userActions = { login: 'LOGIN', loginSuccess: 'LOGINSUCCESS', loginFailure: 'LOGINFAILURE' };

export default {
  login: (email, password) => async dispatch => {
    dispatch({ type: userActions.login });
    try {
      const response = await userService.login(email, password);
      if (response.ok) {
        dispatch({ type: userActions.loginSuccess });
        localStorage.setSessionToken(response.data.access_token);
        api.setHeader('Authorization', response.data.access_token);
        history.push('/dashboard');
      } else {
        dispatch({ type: userActions.loginFailure });
      }
    } catch (e) {
      dispatch({ type: userActions.loginFailure });
    }
  }
};
