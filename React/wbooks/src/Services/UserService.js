import api from '../Config/api';

const UserService = {
  login: async user => api.post('/users/sessions', { ...user }),
  signup: async user => api.post('/users', { user }),
  books: async () => api.get('/books'),
  bookDetail: async id => api.get(`/books/${id}`)
};

export default UserService;
