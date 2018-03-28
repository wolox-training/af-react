import { allBooksFetchActions } from './actions';

const initialState = {
  books: [],
  loading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case allBooksFetchActions.FETCH_BEGIN:
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };

    case allBooksFetchActions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload
      };

    case allBooksFetchActions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        books: []
      };

    default:
      return state;
  }
}
