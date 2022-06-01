import React, { useState } from 'react';

interface ITodoInputProps {
  addTodo: (name: string) => void;
}

const TodoInput = ({ addTodo }: ITodoInputProps) => {
  const [todo, setTodo] = useState('');

  const submit = () => {
    if (todo) {
      addTodo(todo);
    }

    setTodo('');
  };

  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      {' '}
      <button type="button" onClick={() => submit()}>Add</button>
    </>
  );
};

export default TodoInput;
