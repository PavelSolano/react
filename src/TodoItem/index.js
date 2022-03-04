import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
       
       onClick = {props.onComplete}
       
      >
        √
      </span>              
      {/*  Existe una condificón y si propos.completed then todoItem-p--complete*/}
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      
      onClick = {props.onDelete}

      >
        X
      </span>
    </li>
  );
}

export { TodoItem };