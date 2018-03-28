import UserService from '../../Services/UserService';

export const allBooksFetchActions = {
  FETCH_BEGIN: '@@ALL_BOOKS/FETCH_BEGIN',
  FETCH_SUCCESS: '@@ALL_BOOKS/FETCH_SUCCESS',
  FETCH_FAILURE: '@@ALL_BOOKS/FETCH_FAILURE'
};

export const bookDetailFetchActions = {
  FETCH_BEGIN: '@@BOOK_DETAIL/FETCH_BEGIN',
  FETCH_SUCCESS: '@@BOOK_DETAIL/FETCH_SUCCESS',
  FETCH_FAILURE: '@@BOOK_DETAIL/FETCH_FAILURE'
};

const fetchBegin = type => ({
  type
});

const fetchSuccess = (data, type) => ({
  type,
  payload: { data }
});

const fetchError = (error, type) => ({
  type,
  payload: { error }
});

const ActionCreators = {
  books: () => async dispatch => {
    dispatch(fetchBegin(allBooksFetchActions.FETCH_BEGIN));
    const response = await UserService.books();
    if (response.ok) {
      dispatch(fetchSuccess(response.data, allBooksFetchActions.FETCH_SUCCESS));
      return response.data;
    }
    return dispatch(fetchError(response.problem, allBooksFetchActions.FETCH_FAILURE));
  },
  bookDetail: id => async dispatch => {
    dispatch(fetchBegin(bookDetailFetchActions.FETCH_BEGIN));
    const response = await UserService.bookDetail(id);
    if (response.ok) {
      dispatch(fetchSuccess(response.data, bookDetailFetchActions.FETCH_SUCCESS));
      return response.data;
    }
    return dispatch(fetchError(response.problem, bookDetailFetchActions.FETCH_FAILURE));
  }
};

export default ActionCreators;
