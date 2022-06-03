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
      <input data-cy="add-input" value={todo} onChange={(e) => setTodo(e.target.value)} />
      {' '}
      <button data-cy="add-button" type="button" onClick={() => submit()}>Add</button>
    </>
  );
};

export default TodoInput;
