const initState = {
  todoList: [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      console.log("hello");
      return {
        ...state,
        todoList: [],
      };
    case "FETCHING_DATA_SUCCESS":
      return {
        ...state,
        todoList: action.payload,
      };
    case "FETCHING_DATA_FAILURE":
      return {
        ...state,
        todoList: [],
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: action.payload,
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
