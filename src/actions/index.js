export const addTodo = content => ({type: "ADD_TO_DO", content});
export const deleteTodo = id => ({type: "DELETE_TO_DO", id});
export const getTodo = items =>({type: "GET_TO_DO", items});
export const markDoneTodo = (data) => ({type: "MARK_DONE_TODO", data});