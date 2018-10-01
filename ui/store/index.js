import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const api = axios.create({
  baseURL: "http://localhost:5000",
  responseType: "json"
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(axiosMiddleware(api)))
);

export default store;
