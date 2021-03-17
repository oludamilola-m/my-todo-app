import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch(); //this hook gives us dispatch method

  const getTodos = () => {
    return async (dispatch, _getState) => {
      const res = await axios.get("http://localhost:3001/todos");
      dispatch({
        type: "FETCH_TODOS",
        payload: res.data,
      });
    };
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <div className="todos">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="todo-item">
                {todo.content}
              </li>
            );
          })}
        </ul>
        <div className="todos__info">
          {todos.length >= 1 && <span>{todos.length} item left</span>}
          <div className="todos__filters">
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
          <span>Clear completed</span>
        </div>
      </div>
      <div className="todos--filters">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
    </>
  );
};

export default TodoList;
