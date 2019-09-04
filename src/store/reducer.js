// == Initial State
const initialState = {
  response: {},
};

// == Types

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

// == Action Creators


// == Selectors


// == Export
export default reducer;
