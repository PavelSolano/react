import logo from './logo.svg';
import React from 'react';
import { TodoConter } from './TodoConter';
import { TodoSerch } from './TodoSerch';
import {CreataTodoButton} from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
// import './App.css';

const todos =[
  {text: 'cortar cebolla', complete: false},
  {text: 'Tomar curso', complete: true},
  {text: 'Hollar un ratito', complete: false},

];

function App(props) {
  return (
    <React.Fragment>
      <TodoConter/>
  
   <TodoSerch/>
    

    <TodoList>
      {todos.map(todo => (
          <TodoItem key={todo.text} text = {todo.text} completed = {todo.complete} />
      ))}
    </TodoList>

 <CreataTodoButton/>
  
  </React.Fragment>
  );
}

export default App;
