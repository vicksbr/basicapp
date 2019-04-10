import {
  FETCH_CLIENTS,
  FETCH_CLIENTS_SUCCESS,
  ADD_CLIENTS_SUCCESS,
  CLEAR_DB_SUCCESS
} from "../actions/action-types";

const initialState = {};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        ...action.payload.data.clients
      };
    case ADD_CLIENTS_SUCCESS: {
      const { name } = action.payload.data;
      return {
        ...state,
        [name]: action.payload.data
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

export default clientsReducer;
