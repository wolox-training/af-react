import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';

import api from '../../Config/api';
import history from '../../Config/history';
import localStorage from '../../Services/LocalStorage';
import UserService from '../../Services/UserService';

export const actions = createTypes(completeTypes(['LOGOUT', 'LOGIN', 'SIGNUP']), '@@AUTH');

const ActionCreators = {
  logout: () => dispatch => {
    localStorage.removeSessionToken();
    api.setHeader('Authorization', '');
    history.push('/login');
    dispatch({ type: actions.LOGOUT });
  },
  login: (email, password) => ({
    type: actions.LOGIN,
    target: 'login',
    service: UserService.login,
    payload: { email, password },
    injections: [
      withPostSuccess((dispatch, response) => {
        localStorage.setSessionToken(response.data.access_token);
        api.setHeader('Authorization', response.data.access_token);
        history.push('/');
      })
    ]
  }),
  signup: user => ({
    type: actions.SIGNUP,
    target: 'signup',
    service: UserService.signup,
    payload: user,
    injections: [
      withPostSuccess((dispatch, response) => {
        localStorage.setSessionToken(response.data.access_token);
        api.setHeader('Authorization', response.data.access_token);
        history.push('/');
      })
    ]
  })
};

export default ActionCreators;
