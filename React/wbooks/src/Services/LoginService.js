import api from '../Config/api';

const UserService = {
  login: async (email, password) => api.post('/users/sessions', { email, password })
};

export default UserService;
