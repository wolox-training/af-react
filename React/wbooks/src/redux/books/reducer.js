import { fetchActions } from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case fetchActions.FETCH_BEGIN:
      return {
        ...state,
        items: [],
        loading: true,
        error: null
      };

    case fetchActions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case fetchActions.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      };

    default:
      return state;
  }
}
