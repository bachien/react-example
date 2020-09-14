const initState = {
  user: {},
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_TODOLIST":
      console.log("hello");
      return {
        ...state,
        todoList1: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "REMOVE_TODO":
      console.log(action.payload);
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
