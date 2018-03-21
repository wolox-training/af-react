import api from '../Config/api';

const userService = {
  login: async (email, password) => api.post('/users/sessions', { email, password })
};

export default userService;
