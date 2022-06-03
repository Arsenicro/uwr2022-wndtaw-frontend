import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoInput from './TodoInput';

describe('', () => {
  test('Should Add', async () => {
    // Arrange
    const addTodo = jest.fn();
    render(<TodoInput addTodo={addTodo} />);

    const user = userEvent.setup();

    // Act
    await user.type(screen.getByRole('textbox'), 'New Todo');
    await user.click(screen.getByRole('button'));

    // Assert
    expect(addTodo).toBeCalledWith('New Todo');
  });
});
