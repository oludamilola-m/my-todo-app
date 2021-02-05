import React from "react";

const TodoCard = () => {
  return (
    <div>
      <form>
        <label>
          <input name="isCompleted" type="radio" />
          Complete online JavaScript Course
        </label>
        <span> &times;</span>
      </form>
      <div>
        <span>5 item left</span>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
        <span>Clear completed</span>
      </div>
    </div>
  );
};

export default TodoCard;
