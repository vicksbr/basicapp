import React, { useReducer, useEffect } from "react";
import useInput from "../utils"
import useAPI from "../useAPI"

function Clients() {
  
  const inputClientName= useInput("")
  const api = useAPI()  
    
  const clientsArr = Object.values(api.state.clients)

  return(
    <>    
    <p>hooks da massa</p>
    <button onClick={() => api.addClient(inputClientName.value)}>Add</button>    
    <input type='text' {...inputClientName} />
    <button onClick={() => api.clearClient()}>clear</button>
    <ul>      
      {clientsArr.map( (el,index) => <li key={index}>{el.name}</li>)}
    </ul>    
    </>
  );
}



export default Clients;
