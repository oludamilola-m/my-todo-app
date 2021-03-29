import { combineReducers } from "redux";

import { todosReducer } from "./todos/todosReducer";

const rootReducer = combineReducers({
  todosReducer,
});

export default rootReducer;
