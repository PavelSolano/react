import React from "react";


import { TodoConter } from '../TodoConter';
import { TodoSerch } from '../TodoSerch';
import {CreataTodoButton} from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

function AppUI({
    totalTodos,
    todosCompleted,
    serchValue,
    setSerchValue,
    searchedTodos,
    compleTodo,
    delateTodo,
}) {
    return(
<React.Fragment>
    <TodoConter
    totalTodos = {totalTodos}
    todosCompleted = {todosCompleted} 
    />
  
   <TodoSerch
      serchValue = {serchValue}
      setSerchValue = {setSerchValue}

   />
    
    <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.complete}
            onComplete ={() => compleTodo(todo.text)}
            onDelete = {() => delateTodo(todo.text)}
          />
        ))}
      </TodoList>

 <CreataTodoButton/>
  
  </React.Fragment>
    );
}

export {AppUI};