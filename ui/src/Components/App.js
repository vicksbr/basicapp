import React from 'react';
import Clients from './Client/Clients';
import clientReducer, { clientInitialState } from '../../reducer/clientReducer';
import { StateProvider } from './Provider';

const App = () => (
  <StateProvider initialState={clientInitialState} reducer={clientReducer}>
    <Clients />
  </StateProvider>
);

export default App;
