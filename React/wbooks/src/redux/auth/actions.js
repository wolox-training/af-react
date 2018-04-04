import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';

import api from '../../Config/api';
import history from '../../Config/history';
import localStorage from '../../Services/LocalStorage';
import UserService from '../../Services/UserService';
import { routes } from '../../Config/routes';

export const actions = createTypes(completeTypes(['LOGOUT', 'LOGIN'], ['SIGNUP']), '@@AUTH');

function saveTokenAndRedirect(token) {
  localStorage.setSessionToken(token);
  api.setHeader('Authorization', token);
  history.push(routes.PRIVATE_ROUTE);
}

const ActionCreators = {
  logout: () => dispatch => {
    localStorage.removeSessionToken();
    api.setHeader('Authorization', '');
    history.push(routes.ANONYMOUS_ROUTE);
    dispatch({ type: actions.LOGOUT });
  },
  login: (email, password) => ({
    type: actions.LOGIN,
    target: 'login',
    service: UserService.login,
    payload: { email, password },
    injections: withPostSuccess((dispatch, response) => {
      saveTokenAndRedirect(response.data.access_token);
    })
  }),
  signup: user => ({
    type: actions.SIGNUP,
    target: 'signup',
    service: UserService.signup,
    payload: user,
    injections: withPostSuccess((dispatch, response) => {
      saveTokenAndRedirect(response.data.access_token);
    })
  })
};

export default ActionCreators;
