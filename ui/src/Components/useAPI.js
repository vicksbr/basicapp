import clientReducer, { clientInitialState } from "../../reducer/clientReducer"
import { useReducer, useEffect } from 'react'


function useAPI() { 
  
  const [state, dispatch] = useReducer(clientReducer,clientInitialState);
  
  const apiManager = {
    addClient : clientName => dispatch({type:'add', payload: clientName}),
    clearClient : () => dispatch({type:'clear'}),
    delClient : () => dispatch({type:'del'}),
    fetchClient: () => dispatch({type:'fetch'})
  }

  useEffect(() => {
    apiManager.fetchClient()
  }, [state.clients])

  return { 
      state,                  
      ...apiManager
    }
}

export default useAPI