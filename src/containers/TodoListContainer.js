import TodoList from "../components/TodoList";
import {connect} from "react-redux";
import {deleteTodo, getTodo, getDoneTodo} from "../actions";

const mapStateToProps = (state) => (
    {
    todoList: state.todoList
});
const mapDispatchToProps = dispatch => ({
    deleteTodo: id => { dispatch(deleteTodo(id)) },
    getTodo: items => { dispatch(getTodo(items)) },
    getDoneTodo: id => { dispatch(getDoneTodo(id)) }
});
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer