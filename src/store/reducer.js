// == Initial State
const initialState = {
  response: {},
  isLoading: false,
};

// == Types
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const DISPLAY_RESPONSE = 'DISPLAY_RESPONSE';
export const ACTIVE_LOADER = 'ACTIVE_LOADER';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIVE_LOADER:
      return {
        ...state,
        isLoading: true,
      };


    case DISPLAY_RESPONSE:
      return {
        ...state,
        response: action.response,
        isLoading: false,
      };

    default:
      return state;
  }
};

// == Action Creators
export const displayResponse = (response) => ({
  type: DISPLAY_RESPONSE,
  response,
});

// == Action Creators
export const activeLoader = () => ({
  type: ACTIVE_LOADER,
  isLoading: true,
});

// == Selectors

// == Export
export default reducer;
