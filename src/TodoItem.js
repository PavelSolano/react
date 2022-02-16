import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    const onComplete = () =>{
        alert ('Has completado ' + props.text);

    }

    const onDelate = () =>{
        alert ('Has eliminado ' + props.text);

    }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
       
       onClick = {onComplete}
       
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      
      onClick = { onDelate}

      >
        X
      </span>
    </li>
  );
}

export { TodoItem };