import { useEffect } from 'react';
import { useStateValue } from './Provider';

function useAPI() {
  const [state, dispatch] = useStateValue();

  const apiManager = {
    addClient: clientName => dispatch({ type: 'add', payload: clientName }),
    clearClient: () => dispatch({ type: 'clear' }),
    delClient: () => dispatch({ type: 'del' }),
    fetchClient: () => dispatch({ type: 'fetch' }),
  };

  useEffect(() => {
    apiManager.fetchClient();
  }, [state.clients]);

  return {
    state,
    ...apiManager,
  };
}

export default useAPI;
