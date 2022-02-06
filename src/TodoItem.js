import React from 'react';
const TodoItem = (props) => {
  const onComplete = () => {
    alert('ya completaste'+ props.text );
  };
  const onDelete = () => {
    alert('borraste'+ props.text );

  };
  return (
    <li>
      <span
        onClick={props.onComplete}
      >C</span>
      <p>{props.text}</p> 
      <span
      onClick={props.onDelete}
        onClick2={onDelete}
      >X</span>
    </li>

  );
};
export { TodoItem };