import UserService from '../../Services/UserService';

export const fetchActions = {
  FETCH_BEGIN: '@@BOOK_DETAIL/FETCH_BEGIN',
  FETCH_SUCCESS: '@@BOOK_DETAIL/FETCH_SUCCESS',
  FETCH_FAILURE: '@@BOOK_DETAIL/FETCH_FAILURE'
};

export const fetchBegin = () => ({
  type: fetchActions.FETCH_BEGIN
});

export const fetchSuccess = data => ({
  type: fetchActions.FETCH_SUCCESS,
  payload: { data }
});

export const fetchError = error => ({
  type: fetchActions.FETCH_FAILURE,
  payload: { error }
});

export const bookDetailAction = {
  bookDetail: id => async dispatch => {
    dispatch(fetchBegin());
    const response = await UserService.bookDetail(id);
    if (response.ok) {
      dispatch(fetchSuccess(response.data));
      return response.data;
    }
    dispatch(fetchError(response.problem));
    return null;
  }
};
