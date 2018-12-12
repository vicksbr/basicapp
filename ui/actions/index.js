import { FETCH_CLIENTS } from "./action-types";
import { FETCH_CLIENTS_SUCCESS } from "./action-types";
import { ADD_CLIENTS } from "./action-types";
import { ADD_CLIENTS_SUCCESS } from "./action-types";

export const fetchClients = () => ({
  type: "FETCH_CLIENTS",
  payload: {
    request: {
      method: "GET",
      url: "/clients"
    }
  }
});

export const addClient = name => ({
  type: "ADD_CLIENTS",
  payload: {
    request: {
      method: "POST",
      url: "/add",
      data: {
        name: name
      }
    }
  }
});

export const clearDB = () => ({
  type: "CLEAR_DB",
  payload: {
    request: {
      method: "GET",
      url: "/clear"
    }
  }
});
