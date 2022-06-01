import React from 'react';
import { ITodo } from '../../helpers/useTodos';
import Todo from '../todo/Todo';

interface ITodoListProps {
  todos: ITodo[],
  changeTodoStatus: (id: string, completed: boolean) => void,
  remove: (id: string) => void,
}

const TodoList = ({ todos, changeTodoStatus, remove }: ITodoListProps) => {
  const setCompletion = (id: string) => (checked: boolean) => changeTodoStatus(id, checked);

  return (
    <>
      {todos.map(({ id, name, completed }) => (
        <Todo
          key={id}
          name={name}
          completed={completed}
          setCompletion={setCompletion(id)}
          remove={() => remove(id)}
        />
      ))}
    </>
  );
};

export default TodoList;
