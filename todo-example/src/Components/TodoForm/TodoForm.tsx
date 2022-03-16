import React, { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";

interface ITodoFormProps {}

const TodoForm = ({}: ITodoFormProps) => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);

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
