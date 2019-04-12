import { useReducer, useEffect } from 'react'

const initialState = {
  'clients': {
    'default': {
      'name': "default"      
    },
  }
};

function reducer(state, action) {
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
  
function useAPI() { 
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    dispatch({type:'fetch'})
  }, [state.clients])

  return { 
      state,                  
      addClient: clientName => dispatch({type:'add', payload: clientName}),      
      clearClient: () => dispatch({type:'clear'}),
      delClient: () => dispatch({type:'del'}),
    }
}

export default useAPI