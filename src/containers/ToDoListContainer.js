import ToDoList from "../components/ToDoList";
import {connect} from "react-redux";
import {deleteTodo} from "../actions";

const mapStateToProps = (state) => (
    {
    todoList: state.todoList
});
const mapDispatchToProps = dispatch => ({
    deleteTodo: index => {dispatch(deleteTodo(index))}
});
const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
export default ToDoListContainer