import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import './TodoCounter.css';
const TodoCounter = (/*{total, completed}*/) => {
  const {totalTodos, completedTodos} = useContext(TodoContext);
  
  return (
    <h2 className='TodoCounter'> haz completado {completedTodos} de {totalTodos} TODOs</h2>

  );
};
export { TodoCounter };