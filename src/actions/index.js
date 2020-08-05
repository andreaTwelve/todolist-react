export const addTodo = content => ({type: "ADD_TO_DO", content});
export const deleteTodo = id => ({type: "DELETE_TO_DO", id});
export const getTodo = items =>({type: "GET_TO_DO", items});
export const getDoneTodo = id => ({type: "GET_DONE_TO_DO", id});