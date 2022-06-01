import { useCallback, useMemo, useState } from 'react';
import { v4 } from 'uuid';

export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
}

const useTodos = (initialTodos: ITodo[]) => {
  const [todos, setTodos] = useState(initialTodos);

  const changeTodoStatus = useCallback((id: string, completed: boolean) => {
    setTodos(
      (currentTodos) => currentTodos.map(
        (todo) => (todo.id === id ? { ...todo, completed } : todo),
      ),
    );
  }, []);

  const addTodo = useCallback((name: string) => {
    setTodos(
      (currentTodos) => [...currentTodos, { id: v4(), name, completed: false }],
    );
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos(
      (currentTodos) => currentTodos.filter((todo) => todo.id !== id),
    );
  }, []);

  return useMemo(() => ({
    todos,
    changeTodoStatus,
    addTodo,
    removeTodo,
  }), [addTodo, changeTodoStatus, removeTodo, todos]);
};

export default useTodos;
