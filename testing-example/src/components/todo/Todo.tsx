import React from 'react';

interface ITodoProps {
  name: string,
  completed: boolean,
  setCompletion: (checked: boolean) => void,
  remove: () => void;
}

const Todo = ({
  name, completed, setCompletion, remove,
}: ITodoProps) => (
  <div data-cy={`todo-${name}`}>
    {name}
    {' '}
    <input type="checkbox" checked={completed} onChange={(e) => setCompletion(e.target.checked)} />
    {' '}
    <button type="button" onClick={() => remove()}>Remove</button>
  </div>
);

export default Todo;
