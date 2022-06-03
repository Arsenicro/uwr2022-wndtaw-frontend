import React from 'react';
import { renderHook } from '@testing-library/react';
import useTodos from './useTodos';

test('', () => {
  const initialTodos = [
    { id: '1', name: 'Go shopping', completed: false },
  ];

  const hook = renderHook(() => useTodos(initialTodos));

  expect(hook.result.current.todos).toEqual(initialTodos);
});
