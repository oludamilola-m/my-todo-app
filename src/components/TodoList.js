import React from "react";

const TodoList = () => {
  return (
    <>
      <div className="todos">
        <ul>
          <li className="todo-item">Complete online JavaScript Course</li>
          <li className="todo-item">Complete online JavaScript Course</li>
          <li className="todo-item">Complete online JavaScript Course</li>
          <li className="todo-item">Complete online JavaScript Course</li>
        </ul>
        <div className="todos__info">
          <span>5 item left</span>
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
