import { combineReducers } from "redux";
import clientSearchReducer from "./clientSearchReducer";
import clientsReducer from "./clientsReducer";

const rootReducer = combineReducers({
  clients: clientsReducer,
  clientSearch: clientSearchReducer
});

export default rootReducer;
