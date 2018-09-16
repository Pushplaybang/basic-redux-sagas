// action types
const API_CALL_REQUESTED = "API_CALL_REQUESTED";
const API_CALL_SUCCEEDED = "API_CALL_SUCCEEDED";
const API_CALL_FAILED = "API_CALL_FAILED";

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUESTED:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCEEDED:
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILED:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}