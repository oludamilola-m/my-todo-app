import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_TODOS,
  TOGGLE_TODO_COMPLETED,
} from "../redux/todos/todosReducer";

const TodoList = () => {
  const todos = useSelector(({ todosReducer }) => todosReducer.todos);
  const dispatch = useDispatch(); //this hook gives us dispatch method

  const getTodos = () => {
    return async (dispatch, _getState) => {
      const res = await axios.get("http://localhost:3001/todos");
      dispatch({
        type: FETCH_TODOS,
        payload: res.data,
      });
    };
  };

  const toggleTodo = (todo) => {
    return async (dispatch, _getState) => {
      const res = await axios.patch(`http://localhost:3001/todos/${todo.id}`, {
        completed: !todo.completed,
      });
      dispatch({
        type: TOGGLE_TODO_COMPLETED,
        payload: res.data,
      });
    };
  };

  const getCompletedTodos = () => {
    return async (dispatch, _getState) => {
      const res = await axios.get(`http://localhost:3001/todos?completed=true`);
      dispatch({
        type: FETCH_TODOS,
        payload: res.data,
      });
    };
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleGetAllTodos = () => {
    dispatch(getTodos());
  };

  const handleInputChange = (todo) => {
    dispatch(toggleTodo(todo));
  };

  const handleFilterTodos = () => {
    dispatch(getCompletedTodos());
  };

  return (
    <>
      <div className="todos">
        <ul>
          {todos.map((todo) => {
            return (
              <div className="todo-item" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleInputChange(todo)}
                />
                <li className={`${todo.completed ? "completed" : ""}`}>
                  {todo.content}
                </li>
              </div>
            );
          })}
        </ul>
        <div className="todos__info">
          {todos.length >= 1 && (
            <span>
              {todos.filter((todo) => !todo.completed).length} item left
            </span>
          )}
          <div className="todos__filters">
            <span onClick={handleGetAllTodos}>All</span>
            <span>Active</span>
            <span onClick={handleFilterTodos}>Completed</span>
          </div>
          <span>Clear completed</span>
        </div>
      </div>
      <div className="todos--filters">
        <span onClick={handleGetAllTodos}>All</span>
        <span>Active</span>
        <span onClick={handleFilterTodos}>Completed</span>
      </div>
    </>
  );
};

export default TodoList;
