export const fetchClients = () => ({
  type: 'FETCH_CLIENTS',
  payload: {
    request: {
      method: 'GET',
      url: '/clients',
    },
  },
});

export const addClient = name => ({
  type: 'ADD_CLIENTS',
  payload: {
    request: {
      method: 'POST',
      url: '/clients/add',
      data: {
        name,
      },
    },
  },
});

export const clearDB = () => ({
  type: 'CLEAR_DB',
  payload: {
    request: {
      method: 'GET',
      url: '/db/clear',
    },
  },
});
