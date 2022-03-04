// import logo from './logo.svg';
import React from 'react';
import { AppUI } from './AppUI';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}



function App(props) {

  
   
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [serchValue,setSerchValue] = React.useState(' ');

  const todosCompleted = todos.filter( todo => !!todo.complete).length;
  const totalTodos = todos.length; 
  let searchedTodos = [];

  if (!serchValue.length > 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = serchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

 const compleTodo = (text) =>{
    const todoindex = todos.findIndex (todo => todo.text===text);
    const newTodos = [...todos];
    newTodos[todoindex].complete = true;
    saveTodos (newTodos);
  } ;

  const delateTodo = (text) =>{
    const todoindex = todos.findIndex (todo => todo.text===text);
    const newTodos = [...todos];
    newTodos.splice(todoindex,1);
    saveTodos (newTodos);
  } ;
  
  return (
    <AppUI
    totalTodos = {totalTodos}
    todosCompleted = {todosCompleted} 
    serchValue = {serchValue}
    setSerchValue = {setSerchValue}
    searchedTodos ={searchedTodos}
    compleTodo ={compleTodo}
    delateTodo= {delateTodo}

    
    />
  );
}

export default App;
