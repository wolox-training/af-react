import { create } from 'apisauce';

require('dotenv').config();

const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  headers: { Accept: 'application/json' },
  timeout: 7000
});

export default api;
