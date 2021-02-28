import React from "react";

const TextField = ({ onKeyDown }) => {
  return (
    <section className="textField">
      <input
        type="text"
        name="todo"
        placeholder="Create a new todo...."
        onKeyDown={onKeyDown}
      />
    </section>
  );
};

export default TextField;
