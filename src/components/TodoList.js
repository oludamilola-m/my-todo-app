import React from "react";

const TodoList = ({ todos }) => {
  return (
    <>
      <div className="todos">
        <ul>
          {todos.map((todo) => {
            return <li className="todo-item">{todo.content}</li>;
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
