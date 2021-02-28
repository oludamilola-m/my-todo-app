import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TextField from "./components/TextField";

const App = () => {
  const [todos, setTodos] = useState([
    { content: "Complete online JavaScript Course", completed: false },
    { content: "Complete online JavaScript Course", completed: false },
    { content: "Complete online JavaScript Course", completed: false },
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      setTodos((prev) => [
        { content: event.target.value, completed: false },
        ...prev,
      ]);
      event.target.value = "";
    }
  };

  return (
    <div className="todo-container">
      <Header />
      <main>
        <TextField onKeyDown={onKeyDown} />
        <TodoList todos={todos} />
      </main>
    </div>
  );
};

export default App;
