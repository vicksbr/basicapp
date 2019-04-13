import React from "react";
import useInput from "../utils"
import useAPI from "../useAPI"
import AddButton from "./AddButton"

function Clients() {
  
  const inputClientName = useInput("")
  const { state, apiManager } = useAPI()  
  const { clients } = state  
  
  const ListClients = () =>  { 
    const clientsArr = Object.values(clients)      
    return(
      <ul>
        {clientsArr.map((el,index) => <li key={index}>{el.name}</li>)}
      </ul>
    )
  }
  
  return(
    <>    
      <p>hooks da massa</p>
      <button type='button' onClick={() => apiManager.addClient(inputClientName.value)}>Add</button>    
      <input type='text' {...inputClientName} />
      <button type='button' onClick={() => apiManager.clearClient()}>clear</button>
      <ListClients />      
      <AddButton onAdd={() => apiManager.addClient(inputClientName.value)} />
    </>
  );
}

export default Clients;
