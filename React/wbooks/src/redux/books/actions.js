import UserService from '../../Services/UserService';

export const fetchActions = {
  FETCH_BEGIN: 'FETCH_BEGIN',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE'
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

const fetch = service => async dispatch => {
  dispatch(fetchBegin());
  const response = await service;
  if (response.ok) {
    dispatch(fetchSuccess(response.data));
    return response.data;
  }
  dispatch(fetchError(response.problem));
  return null;
};

export const bookActions = {
  books: () => async dispatch => {
    dispatch(fetchBegin());
    const response = await UserService.books();
    if (response.ok) {
      dispatch(fetchSuccess(response.data));
      return response.data;
    }
    dispatch(fetchError(response.problem));
    return null;
  },
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
