import { FETCH_CLIENTS } from "../actions/action-types";
import { FETCH_CLIENTS_SUCCESS } from "../actions/action-types";
import { ADD_CLIENTS_SUCCESS } from "../actions/action-types";

const initialState = {
  clients: {}
};


const clientsToArray = (clientsObj) => {

}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state, loading: true };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: { ...state.clients, ...action.payload.data.clients }
      };
    case 'ADD_CLIENTS_FAIL': {
      console.log('falhou')
    };
    case ADD_CLIENTS_SUCCESS: {
      console.log(state.clients)
      console.log(action.payload.data)
      return {
        clients: { ...state.clients, ...[action.payload.data] }
      }
    }
    default:
      return state;
  }
};

export default rootReducer;
