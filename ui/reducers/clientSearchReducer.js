const initialState = {
  input: '',
};

const clientSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUT_SEARCH_CLIENT':
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

export default clientSearchReducer;
