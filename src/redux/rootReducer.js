const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    // add a todo
    case "REMOVE_TODO":
      return { ...state };
    // remove a todo
    default:
      return { ...state };
  }
};

export default rootReducer;
