import IconButton from "@mui/material/IconButton/IconButton";
import ListItem from "@mui/material/ListItem/ListItem";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { TodoContext } from "../../Context/TodoContext";
import { removeTodo } from "../../Redux/TodoSlice";
import ITodo from "../../types/ITodo";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText/ListItemText";

interface ITodoProps {
  todo: ITodo;
}

const Todo = ({ todo }: ITodoProps) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onClick}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={todo.name} />
    </ListItem>
  );
};

export default Todo;
