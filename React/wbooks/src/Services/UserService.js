import api from '../Config/api';

const UserService = {
  login: async (email, password) => api.post('/users/sessions', { email, password }),
  signup: async user => api.post('/users', { user })
};

export default UserService;
