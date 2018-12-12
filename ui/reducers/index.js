import { FETCH_CLIENTS } from "../actions/action-types";
import { FETCH_CLIENTS_SUCCESS } from "../actions/action-types";
import { ADD_CLIENTS_SUCCESS } from "../actions/action-types";
import { CLEAR_DB_SUCCESS } from "../actions/action-types";
const initialState = {
  clients: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state, loading: true };
    case FETCH_CLIENTS_SUCCESS:
      const { status } = action.payload;
      if (status == 200) {
        return {
          ...state,
          loading: false,
          clients: { ...state.clients, ...action.payload.data.clients }
        };
      } else {
        return {
          ...state
        };
      }
    case "ADD_CLIENTS_FAIL": {
      console.log("falhou");
    }
    case ADD_CLIENTS_SUCCESS: {
      const { name } = action.payload.data;
      return {
        clients: { ...state.clients, [name]: action.payload.data }
      };
    }
    case CLEAR_DB_SUCCESS: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
