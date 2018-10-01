import { FETCH_CLIENTS } from "../actions/action-types";
import { FETCH_CLIENTS_SUCCESS } from "../actions/action-types";

const initialState = {
  clients: {}
};

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
    default:
      return state;
  }
};

export default rootReducer;
