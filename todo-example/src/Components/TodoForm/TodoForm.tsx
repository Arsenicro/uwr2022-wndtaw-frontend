import React, { useState } from "react";

interface ITodoFormProps {
  addTodo: (name: string) => void;
}

const TodoForm = ({ addTodo }: ITodoFormProps) => {
  const [input, setInput] = useState("");

  const onClick = () => {
    addTodo(input);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default TodoForm;
