import React, { useContext } from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import { TodoContext } from "./TodoContext";
import { Modal } from './Modal';
import { TodoForm } from "./TodoForm";

import { TodosError } from "./TodoUtils/TodosError";
import { TodosLoading } from "./TodoUtils/TodosLoading";
import { EmptyTodos } from "./TodoUtils/EmotyTodos";

const AppUi = (/*{
  loading, 
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}*/) => {

  const { error,
    loading,
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter /*
        total={totalTodos}
        completed={completedTodos}*/
      />
      <TodoSearch /*
        searchValue={searchValue}
        setSearchValue={setSearchValue} */
      />

        {/*
      <TodoContext.Consumer>
        {({ error,
            loading,
            searchedTodos, 
            completeTodo, 
            deleteTodo }) => (
        */}
          <TodoList>
            {error && <TodosError/>}
            {loading && <TodosLoading/>}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
            {searchedTodos.map( todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo
                  (todo.text)}
                onDelete={() =>deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        {/* )} 
        </TodoContext.Consumer>
        */}

        {!!openModal && (
      <Modal>
        <TodoForm/>
      </Modal>

        )}
      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
     
    </React.Fragment>
  );
};

export { AppUi };