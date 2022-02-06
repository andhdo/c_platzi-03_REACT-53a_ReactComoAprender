import React, { useEffect, useState } from "react";
import { useLocalStorage2 } from "./useLocalStorage2";

const TodoContext = React.createContext();
function TodoProvider(props) {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage2('TODOS_V1',[]);

  const [searchValue, setSearchValue] = useState('');
const[openModal,setOpenModal] = useState(false);

  const completedTodos = todos.filter( (todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!searchValue.length >=1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const addTodo
   = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos);
    //newTodos[todoIdnex] = {
    //  text: todos[todoIdnex].text,
    //  completed: true
    //};
  };

  const completeTodo
   = (text) => {
    const todoIdnex= todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIdnex].completed= true;
    saveTodos(newTodos);
    //newTodos[todoIdnex] = {
    //  text: todos[todoIdnex].text,
    //  completed: true
    //};
  };
  const deleteTodo = (text) => {
    const todoIdnex= todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIdnex,1);
    saveTodos(newTodos);
  };

  console.log('redner ante de use effect');
  useEffect(()=>{
    console.log('use effect');
  }, [totalTodos]); // 2do árametro: 
  console.log('redner despues de use effect');



  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export {TodoContext,TodoProvider};



//<TodoContext.Consumer></TodoContext.Consumer>
