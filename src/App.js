import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TextField from "./components/TextField";

const App = () => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    console.log("value: ", event.target.value);
    setContent({ value: event.target.value });
  };
  return (
    <div className="todo-container">
      <Header />
      <main>
        <TextField handleChange={handleChange} />
        <TodoList content={content} />
      </main>
    </div>
  );
};

export default App;
