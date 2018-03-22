import api from '../../Config/api';
import history from '../../Config/history';
import UserService from '../../Services/UserService';
import localStorage from '../../Services/LocalStorage';

export const userActions = {
  signup: 'SIGNUP',
  signupSuccess: 'SIGNUPSUCCESS',
  signupFailure: 'SIGNUPFAILURE'
};

export default {
  signup: user => async dispatch => {
    dispatch({ type: userActions.signup });
    const response = await UserService.signup(user);
    if (response.ok) {
      dispatch({ type: userActions.signupSuccess });
      localStorage.setSessionToken(response.data.access_token);
      api.setHeader('Authorization', response.data.access_token);
      history.push('/dashboard');
    } else {
      dispatch({ type: userActions.signupFailure });
    }
  }
};
