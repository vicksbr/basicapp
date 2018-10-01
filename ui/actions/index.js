import { FETCH_CLIENTS } from "./action-types";
import { FETCH_CLIENTS_SUCCESS } from "./action-types";

export const fetchClients = () => ({
  type: "FETCH_CLIENTS",
  payload: {
    request: {
      method: "GET",
      url: "/clients"
    }
  }
});
