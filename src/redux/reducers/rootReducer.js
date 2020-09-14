import todoReducer from "./todoReducer";
import countReducer from "./counterReducer";
import { combineReducers } from "redux";

//Combine all the sub reducers
const rootReducer = combineReducers({
  todos: todoReducer,
  myCounter: countReducer
});

export default rootReducer;
