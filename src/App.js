import React, { useEffect, useState } from 'react';
import { AppUi } from './AppUi';

import {TodoProvider } from './TodoContext';

const defaultTodos = [
  { text: 'Cortar cebolla', completed:true },
  { text: 'tomar curso react', completed:false },
  { text: 'hacer hamburguesa', completed:false },
];


function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;

