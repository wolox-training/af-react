import api from '../../Config/api';
import history from '../../Config/history';
import localStorage from '../../Services/LocalStorage';

export const userActions = { logout: 'LOGOUT' };

export default {
  logout: () => async dispatch => {
    dispatch({ type: userActions.logout });
    localStorage.removeSessionToken();
    api.setHeader('Authorization', '');
    history.push('/login');
  }
};
