// import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton'

const todos = [
  { text: 'Leer un libro', completed: false },
  { text: 'Tomar agua', completed: false },
  { text: 'Ver serie en netflix', completed: false },
  { text: 'Salir a correr', completed: false }
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
          <TodoItem  
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
        ))} 
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
