import React from "react";
import './TodoConter.css';

function TodoConter({totalTodos, todosCompleted}){

    return(
    <h2 className="TodoConter">
       <span>X</span> Todo Machine <span>X</span>
       <p>Has completado {todosCompleted} de {totalTodos}</p>
    </h2>
    )
}

export {TodoConter};