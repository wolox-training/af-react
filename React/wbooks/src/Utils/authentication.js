import localStorage from '../Services/LocalStorage';

function isAuthenticated() {
  return localStorage.getSessionToken();
}

export default isAuthenticated;
