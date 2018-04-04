import { completeTypes, createTypes } from 'redux-recompose';

import UserService from '../../Services/UserService';

export const actions = createTypes(
  completeTypes(['GET_ALL_BOOKS', 'GET_BOOK_DETAIL', 'GET_RENT_LIST', 'GET_WISH_LIST', 'MAKE_WISH']),
  '@@BOOK'
);

const ActionCreators = {
  books: () => ({
    type: actions.GET_ALL_BOOKS,
    target: 'books',
    service: UserService.books
  }),
  bookDetail: bookId => ({
    type: actions.GET_BOOK_DETAIL,
    target: 'bookDetail',
    service: UserService.bookDetail,
    payload: bookId
  })
};

export default ActionCreators;
