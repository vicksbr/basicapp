export const clientInitialState = {
  'clients': {
    'default': {
      'name': "default"      
    },
  }
};

function clientReducer(state, action) {
    switch (action.type) {
      case "add":      
        return { ...state, ['clients']: { ...state.clients, [action.payload]: {name: action.payload }}};
      case "fetch":
        return state;
      case 'del':
        return state;
      case 'clear':
        return initialState
      default:
        return state;
    }  
  }
  
  export default clientReducer