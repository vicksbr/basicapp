const initialState = {
  input: ""
};

const clientSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT_SEARCH_CLIENT":
      return { ...state, input: action.payload };
    case "CLEAR_INPUT_SEARCH_CLIENT":
      return { ...initialState };

    default:
      return state;
  }
};

export default clientSearchReducer;
