import React from 'react';
import './CreateTodoButton.css';
const CreateTodoButton = (props) => {
  const onClickButton = (msg) => {
    props.setOpenModal(prevState => !prevState)
    // alert('aqui abre modal');
    console.log('click');
  };

  return (
    <button 
      className='CreateTodoButton'
      onClick={onClickButton}
    >+</button>
  );
};
export { CreateTodoButton };

