import React from 'react';
import { v4 } from 'uuid';
import TodoInput from './components/todo-input/TodoInput';
import TodoList from './components/todo-list/TodoList';
import useTodos from './helpers/useTodos';

const initialTodos = [
  { id: v4(), name: 'Go shopping', completed: false },
  { id: v4(), name: 'Pay rent', completed: true },
  { id: v4(), name: 'Go swimming', completed: true },
  { id: v4(), name: 'Study for AiSD exam', completed: false },
  { id: v4(), name: 'Prepare dinner', completed: false },
];

const App = () => {
  const {
    todos, changeTodoStatus, removeTodo, addTodo,
  } = useTodos(initialTodos);

  return (
    <>
      <div>Todo - List!</div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} changeTodoStatus={changeTodoStatus} remove={removeTodo} />
    </>
  );
};

export default App;
