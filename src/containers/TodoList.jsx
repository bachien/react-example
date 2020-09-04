import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";
import { initDataTodoList } from "../redux/actions/index";
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import "../scss/TodoList.scss";

const TodoList = () => {
  //#2 Used to get a single attribute or object inside the Reducer
  const inputEl = useRef(null);
  const handleClickBtn = () => {
    inputEl.current.value = 123;
  };

  //Get todoList from todoReducer
  const todoList = useSelector((state) => state.todos.todoList);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Local state for the input
  const [inputTodo, setInputTodo] = useState("");
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(initDataTodoList());
  }, [stableDispatch]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  //Handle onChange event
  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  //Handle onClick event
  const addNewTodo = () => {
    //Valid input value
    if (inputTodo.trim().length > 1) {
      let newTodoObject = {
        id: Math.random(),
        content: inputTodo,
      };
      //Add new todo item into List with the action
      dispatch({
        type: "ADD_TODO",
        payload: newTodoObject,
      });
      //Empty input
      setInputTodo("");
    } else {
      //Display Error message
      alert("Please input something...");
    }
  };

  return (
    <section id="section-todo" className="todo-list">
      <h3 className="title"> Todo List </h3>{" "}
      {todoList.length > 0 ? (
        <ListGroup>
          {" "}
          {todoList.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}{" "}
        </ListGroup>
      ) : (
        <p className="msg-empty"> You don 't have anything to do! Awesome!</p>
      )}
      <InputGroup className="mt-3">
        <FormControl
          onChange={handleInput}
          value={inputTodo}
          placeholder="Add todo..."
          id="todo-input"
          type="text"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={addNewTodo}>
            {" "}
            Add Items{" "}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </section>
  );
};

export default TodoList;
