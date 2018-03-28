import { allBooksFetchActions, bookDetailFetchActions } from './actions';

const initialState = {
  books: [],
  loadingBooks: false,
  errorBooks: null,
  bookDetail: null,
  loadingDetail: false,
  errorDetail: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case allBooksFetchActions.FETCH_BEGIN:
      return {
        ...state,
        loadingBooks: true,
        errorBooks: null
      };

    case allBooksFetchActions.FETCH_SUCCESS:
      return {
        ...state,
        loadingBooks: false,
        books: action.payload.data
      };

    case allBooksFetchActions.FETCH_FAILURE:
      return {
        ...state,
        loadingBooks: false,
        errorBooks: action.payload,
        books: []
      };

    case bookDetailFetchActions.FETCH_BEGIN:
      return {
        ...state,
        loadingDetail: true,
        errorDetail: null,
        bookDetail: null
      };

    case bookDetailFetchActions.FETCH_SUCCESS:
      return {
        ...state,
        loadingDetail: false,
        bookDetail: action.payload.data
      };

    case bookDetailFetchActions.FETCH_FAILURE:
      return {
        ...state,
        loadingDetail: false,
        errorDetail: action.payload,
        bookDetail: null
      };

    default:
      return state;
  }
}
