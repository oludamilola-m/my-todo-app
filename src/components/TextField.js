import React from "react";

const TextField = ({ handleChange }) => {
  return (
    <section className="textField">
      <input
        type="text"
        value=""
        placeholder="Create a new todo...."
        // value={this.state.value}
        onChange={handleChange}
      />
    </section>
  );
};

export default TextField;
