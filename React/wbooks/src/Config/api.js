import { create } from 'apisauce';

import localStorage from '../Services/LocalStorage';
import isAuthenticated from '../Utils/authentication';

require('dotenv').config();

const accessToken = isAuthenticated() ? localStorage.getSessionToken() : null;

const api = create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Accept: 'application/json', Authorization: accessToken },
  timeout: 7000
});

export default api;
