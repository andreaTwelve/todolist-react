const todoList = (state=[], action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return [...state, action.text];
        case "DELETE_TO_DO":
            console.log(...state.splice(0, action.index));
            return [...state.splice(0, action.index), ...state.splice(action.index + 1)];
        default:
            return state
    }
};

export default todoList