import { useState } from 'react';

// criar a funcionalidade `useInput` e aceitar o valor inicial como parâmetro
const useInput = (initial = '') => {
  // inicializar o estado
  const [value, setValue] = useState(initial);

  // exportar um objeto com o `value` e o método `onChange`
  // o método `onChange` já trata a mudança de estado
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

// exportar a nova funcionalidade
export default useInput;