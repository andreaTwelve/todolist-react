const todoList = (state=[], action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return [...state, action.content];
        case "DELETE_TO_DO":
            console.log(...state.splice(0, action.index));
            return [...state.filter(item => item.id !== action.id)];
        case "GET_TO_DO":
            //直接返回新的数组就好了
            return [...action.items];
        case "DONE":
            state[action.id].status = 'true';
            return [...state];
        default:
            return state
    }
};

export default todoList