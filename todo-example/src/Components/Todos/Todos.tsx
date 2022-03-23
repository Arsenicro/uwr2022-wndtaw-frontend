import { List } from "@mui/material";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { TodoContext } from "../../Context/TodoContext";
import { selectTodo } from "../../Redux/TodoSlice";
import ITodo from "../../types/ITodo";
import Todo from "../Todo/Todo";

interface ITodosProps {}

const Todos = ({}: ITodosProps) => {
  const todos = useSelector(selectTodo);

  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default Todos;
