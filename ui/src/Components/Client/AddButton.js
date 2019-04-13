import React from 'react'


const AddButton = ({onAdd}) => { 
  return(
    <button 
      type='button'       
      onClick={onAdd}
    > 
      Add
    </button>    
  );
}

export default AddButton