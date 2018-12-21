import {
  FETCH_CLIENTS,
  FETCH_CLIENTS_SUCCESS,
  ADD_CLIENTS_SUCCESS,
  CLEAR_DB_SUCCESS,
} from '../actions/action-types';

const initialState = {
  clients: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state, loading: true };
    case FETCH_CLIENTS_SUCCESS:
      if (action.payload.status === 200) {
        return {
          ...state,
          loading: false,
          clients: { ...state.clients, ...action.payload.data.clients },
        };
      }
      return {
        ...state,
      };

    case 'ADD_CLIENTS_FAIL': {
      console.log('falhou');
      break;
    }
    case ADD_CLIENTS_SUCCESS: {
      const { name } = action.payload.data;
      return {
        clients: { ...state.clients, [name]: action.payload.data },
      };
    }
    case CLEAR_DB_SUCCESS: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
