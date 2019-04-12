

function useAPI() { 
  
    const [state, dispatch] = useReducer(reducer, initialState);
      return { 
        state,
        dispatch,
        fetchClients: e => dispatch({type:'fetch'}),
        addClient: clientName => dispatch({type:'add', payload: clientName})
      }
  }
  
  export default useAPI