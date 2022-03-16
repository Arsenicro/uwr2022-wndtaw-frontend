import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { TodoContext } from "../../Context/TodoContext";
import { addTodo } from "../../Redux/TodoSlice";

interface ITodoFormProps {}

const TodoForm = ({}: ITodoFormProps) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addTodo(input));
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
