import React from 'react';

import './App.css';

import { Situation, size, status } from './situation';

function App() {
  return (
      <Situation
        size={size.large}
        status={status.aguardandoAprovacao} />
  );
}

export default App;
