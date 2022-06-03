import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/todo-input/TodoInput', () => function () {
  return <div>TodoInput</div>;
});
jest.mock('./components/todo-list/TodoList', () => jest.fn());
jest.mock('./helpers/useTodos', () => () => ({
  todos: [],
  changeTodoStatus: jest.fn(),
  removeTodo: jest.fn(),
  addTodo: jest.fn(),
}));

test('Should Render', () => {
  render(<App />);

  const list = screen.getByText(/Todo(.*)List/);

  expect(list).toBeInTheDocument();
});
