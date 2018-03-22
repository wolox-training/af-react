import { create } from 'apisauce';

require('dotenv').config();

const api = create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Accept: 'application/json' },
  timeout: 7000
});

export default api;
