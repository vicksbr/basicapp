import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  responseType: "json"
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(axiosMiddleware(api)))
);

export default store;
