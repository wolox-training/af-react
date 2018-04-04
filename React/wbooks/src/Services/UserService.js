import api from '../Config/api';

const UserService = {
  login: async user => api.post('/users/sessions', { ...user }),
  signup: async user => api.post('/users', { user }),
  userInfo: async () => api.get('/users/me'),
  books: async () => api.get('/books'),
  bookDetail: async id => api.get(`/books/${id}`),
  rentList: async id => api.get(`/books/${id}/rents`),
  wishlist: async id => api.get(`/users/${id}/wishes`),
  newWishlist: async (user_id, book_id) => api.post(`/users/${user_id}/wishes`, { user_id, book_id })
};

export default UserService;

/*
userInfo = {
comments_counter:89
email:"react.dev@wolox.com.ar"
first_name:"Sebastian"
id:34
image_url:null
last_name:"Balay"
rents_counter:0
unread_notifications_count:166
}
*/
