import { FETCH_CLIENTS } from "../actions/action-types";
import { FETCH_CLIENTS_SUCCESS } from "../actions/action-types";
import { ADD_CLIENTS_SUCCESS } from "../actions/action-types";

const initialState = {
  clients: {}
};



const addClientUtil = (clients, clientData) => ({
  ...clients,
  [clientData.name]: clientData
});


const rootReducer = (state = initialState, action) => {
  console.log('ENTROU NESSA CARALHA')
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
      console.log("falhou essa porra",action)
      return { 
      }
    };
    case ADD_CLIENTS_SUCCESS: { 
        console.log('entrou')
        console.log(action.payload.data)
        // ...state,
        // ...addClientUtil(state,action.payload.data)
    }
    default:
      return state;
  }
};




export default rootReducer;
