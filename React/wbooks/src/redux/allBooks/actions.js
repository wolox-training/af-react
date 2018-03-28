import UserService from '../../Services/UserService';

export const allBooksFetchActions = {
  FETCH_BEGIN: '@@ALL_BOOKS/FETCH_BEGIN',
  FETCH_SUCCESS: '@@ALL_BOOKS/FETCH_SUCCESS',
  FETCH_FAILURE: '@@ALL_BOOKS/FETCH_FAILURE'
};

export const allBooksFetchBegin = () => ({
  type: allBooksFetchActions.FETCH_BEGIN
});

export const allBooksFetchSuccess = data => ({
  type: allBooksFetchActions.FETCH_SUCCESS,
  payload: { data }
});

export const allBooksFetchError = error => ({
  type: allBooksFetchActions.FETCH_FAILURE,
  payload: { error }
});

export const allBooksAction = {
  books: () => async dispatch => {
    dispatch(allBooksFetchBegin());
    const response = await UserService.books();
    if (response.ok) {
      dispatch(allBooksFetchSuccess(response.data));
      return response.data;
    }
    dispatch(allBooksFetchError(response.problem));
    return null;
  }
};
