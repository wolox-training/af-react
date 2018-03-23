import api from '../../Config/api';
import history from '../../Config/history';
import UserService from '../../Services/LoginService';
import localStorage from '../../Services/LocalStorage';

export const userActions = { login: 'LOGIN', loginSuccess: 'LOGINSUCCESS', loginFailure: 'LOGINFAILURE' };

export default {
  login: (email, password) => async dispatch => {
    dispatch({ type: userActions.login });
    const response = await UserService.login(email, password);
    if (response.ok) {
      dispatch({ type: userActions.loginSuccess });
      localStorage.setSessionToken(response.data.access_token);
      api.setHeader('Authorization', response.data.access_token);
      history.push('/dashboard');
    } else {
      dispatch({ type: userActions.loginFailure });
    }
  }
};
