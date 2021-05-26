import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO_COMPLETED,
} from "../redux/todos/todosReducer";

const TodoList = () => {
  const todos = useSelector(({ todosReducer }) => todosReducer.todos);
  const dispatch = useDispatch(); //this hook gives us dispatch method

  const activeTodos = () => {
    return async (dispatch, _getState) => {
      const results = await axios.get(
        `http://localhost:3001/todos?completed=false`
      );
      dispatch({
        type: FETCH_TODOS,
        payload: results.data,
      });
    };
  };

  const clearCompletedTodos = () => {
    return async (dispatch, _getState) => {
      todos.forEach(async (todo) => {
        if (todo.completed) {
          await axios.delete(`http://localhost:3001/todos/${todo.id}`);
          dispatch({
            type: REMOVE_TODO,
            payload: todo.id,
          });
        }
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

  const getTodos = () => {
    return async (dispatch, _getState) => {
      const res = await axios.get("http://localhost:3001/todos");
      dispatch({
        type: FETCH_TODOS,
        payload: res.data,
      });
    };
  };

  const removeTodo = (todo) => {
    return async (dispatch, _getState) => {
      await axios.delete(`http://localhost:3001/todos/${todo.id}`);
      dispatch({
        type: REMOVE_TODO,
        payload: todo.id,
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

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleActiveTodos = () => {
    dispatch(activeTodos());
  };

  const handleCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  };

  const handleFilterTodos = () => {
    dispatch(getCompletedTodos());
  };

  const handleGetAllTodos = () => {
    dispatch(getTodos());
  };

  const handleInputChange = (todo) => {
    dispatch(toggleTodo(todo));
  };

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));
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
                <li
                  className="removeTodo"
                  onClick={() => handleRemoveTodo(todo)}
                >
                  &times;
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
            <span onClick={handleActiveTodos}>Active</span>
            <span onClick={handleFilterTodos}>Completed</span>
          </div>
          <span onClick={handleCompletedTodos}>Clear completed</span>
        </div>
      </div>
      <div className="todos--filters">
        <span onClick={handleGetAllTodos}>All</span>
        <span onClick={handleActiveTodos}>Active</span>
        <span onClick={handleFilterTodos}>Completed</span>
      </div>
    </>
  );
};

export default TodoList;
