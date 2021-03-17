import React, { useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TextField from "./components/TextField";
import store from "./redux/store";

const App = () => {
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(event.target.value);
      // store.dispatch({ type: ADD_TODO, content: event.target.value });
      // setTodos((prev) => [
      //   { content: event.target.value, completed: false },
      //   ...prev,
      // ]);
      event.target.value = "";
    }
  };

  return (
    <Provider store={store}>
      <div className="todo-container">
        <Header />
        <main>
          <TextField onKeyDown={onKeyDown} />
          {/* <TodoList todos={todos} /> */}
        </main>
      </div>
    </Provider>
  );
};

export default App;
