import React from 'react';
import useInput from '../utils';
import useAPI from '../useAPI';
import AddButton from './AddButton';

function Clients() {
  const inputClientName = useInput('');
  const { state, addClient, clearClient } = useAPI();
  const { clients } = state;

  const ListClients = () => {
    const clientsArr = Object.values(clients);
    return (
      <ul>
        {clientsArr.map(el => (
          <li key={el}>{el.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <p>hooks da massa</p>
      <button type="button" onClick={() => addClient(inputClientName.value)}>
        Add
      </button>
      <input type="text" {...inputClientName} />
      <button type="button" onClick={() => clearClient()}>
        clear
      </button>
      <ListClients />
      <AddButton valueToAdd={inputClientName.value} />
    </>
  );
}

export default Clients;
