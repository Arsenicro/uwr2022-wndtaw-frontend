import React, { useContext, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { TodoContext } from "../../Context/TodoContext";
import { addTodo } from "../../Redux/TodoSlice";

interface ITodoFormProps {}

const TodoForm = ({}: ITodoFormProps) => {
  const [input, setInput] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addTodo(input));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        aria-describedby="basic-addon2"
        value={input}
        onChange={onChange}
      />
      <Button
        className="ms-2"
        variant="outline-secondary"
        id="button-addon2"
        onClick={onClick}
      >
        {t("add")}
      </Button>
    </InputGroup>
  );
};

export default TodoForm;
