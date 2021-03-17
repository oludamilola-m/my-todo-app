const initialState = {
  todos: [
    { content: "Complete online JavaScript Course", completed: false },
    { content: "Complete online Ruby Course", completed: false },
    { content: "Complete online Python Course", completed: false },
  ],
  id: 0,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state };
    // add a todo
    case "REMOVE_TODO":
      return { ...state };
    // remove a todo
    default:
      return { ...state };
  }
};

export default rootReducer;
