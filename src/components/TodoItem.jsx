import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroupItem } from "react-bootstrap";
import { MdClose } from "react-icons/md";

//Single todo item component
const TodoItem = (props) => {
  //Get todoList from todoReducer
  const todoList = useSelector((state) => state.todos.todoList);
  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Remove single todo in the list
  const removeTodoItem = (todoId) => {
    //filter to get the todoId which need to be remove
    let newTodoList = todoList.filter((item) => item.id !== todoId);
    dispatch({ type: "REMOVE_TODO", payload: newTodoList });
  };

  return (
    <ListGroupItem key={props.item.id}>
      <span>{props.item.content}</span>
      <span
        className="remove-item"
        onClick={() => {
          removeTodoItem(props.item.id);
        }}
      >
        <MdClose></MdClose>
      </span>
    </ListGroupItem>
  );
};

export default TodoItem;
