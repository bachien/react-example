import { todolistData } from "../../data/totoListData";

export const initDataTodoList = () => ({
  type: "INIT_TODOLIST",
  payload: todolistData,
});

/* export const initDataTodoList = function initDataTodoList() {
  console.log("haha");
  return {
    type: "INIT_TODOLIST",
    payload: todolistData,
  };
}; */
