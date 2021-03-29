const initialState = {
  todos: [],
};

export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED";
export const REMOVE_TODO = "REMOVE_TODO";

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    // Toggle  todo
    case TOGGLE_TODO_COMPLETED:
      const res = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      return { ...state, todos: res };

    //remove a todo
    case REMOVE_TODO:
      const todos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: todos };

    default:
      return { ...state };
  }
};
