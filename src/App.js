import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TextField from "./components/TextField";
import store from "./redux/store";
import axios from "axios";

const App = () => {
  const addTodo = (content) => {
    return async (dispatch, _getState) => {
      const res = await axios.post("http://localhost:3001/todos", {
        content: content,
        completed: false,
      });
      dispatch({
        type: "ADD_TODO",
        payload: res.data,
      });
    };
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      store.dispatch(addTodo(event.target.value));
      event.target.value = "";
    }
  };

  return (
    <Provider store={store}>
      <div className="todo-container">
        <Header />
        <main>
          <TextField onKeyDown={onKeyDown} />
          <TodoList />
        </main>
      </div>
    </Provider>
  );
};

export default App;
