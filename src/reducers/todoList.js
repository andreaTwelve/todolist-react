const todoList = (state=[], action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return [...state, action.content];
        case "DELETE_TO_DO":
            return [...state.filter(item => item.id !== action.id)];
        case "GET_TO_DO":
            //直接返回新的数组就好了
            return [...action.items];
        case "MARK_DONE_TODO":
            //todo find !status
            console.log("mark action", action);
            console.log("mark state",state);
            console.log("mark ...state",...state);
            let item = state.find(item => item.id === action.data.id);
            console.log("item: ", item);
            Object.assign(item, action.data);
            console.log("mark ... state", ...state);
            return [...state];
        case "GET_MARK_DONE_TODO":
            console.log("mark done", state.filter(item => item.status === true));
            return [...state.filter(item => item.status === true)];
        default:
            return state
    }
};

export default todoList