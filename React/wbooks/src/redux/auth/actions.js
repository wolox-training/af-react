import api from '../../Config/api';
import history from '../../Config/history';
import localStorage from '../../Services/LocalStorage';
import UserService from '../../Services/UserService';

export const authActions = {
  logout: 'LOGOUT',
  login: 'LOGIN',
  loginSuccess: 'LOGIN_SUCCESS',
  loginFailure: 'LOGIN_FAILURE',
  signup: 'SIGNUP',
  signupSuccess: 'SIGNUP_SUCCESS',
  signupFailure: 'SIGNUP_FAILURE'
};

const ActionCreators = {
  logout: () => {
    localStorage.removeSessionToken();
    api.setHeader('Authorization', '');
    history.push('/login');
    return { type: authActions.logout };
  },
  login: (email, password) => async dispatch => {
    dispatch({ type: authActions.login });
    const response = await UserService.login(email, password);
    if (response.ok) {
      dispatch({ type: authActions.loginSuccess });
      localStorage.setSessionToken(response.data.access_token);
      api.setHeader('Authorization', response.data.access_token);
      history.push('/dashboard');
    } else {
      dispatch({ type: authActions.loginFailure });
    }
  },
  signup: user => async dispatch => {
    dispatch({ type: authActions.signup });
    const response = await UserService.signup(user);
    if (response.ok) {
      dispatch({ type: authActions.signupSuccess });
      localStorage.setSessionToken(response.data.access_token);
      api.setHeader('Authorization', response.data.access_token);
      history.push('/dashboard');
    } else {
      dispatch({ type: authActions.signupFailure });
    }
  }
};

export default ActionCreators;
