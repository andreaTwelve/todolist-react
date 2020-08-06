import TodoList from "../components/TodoList";
import {connect} from "react-redux";
import {deleteTodo, getTodo, markDoneTodo} from "../actions";

const mapStateToProps = (state) => (
    {
      todoList: state.todoList
    });
const mapDispatchToProps = dispatch => ({
  deleteTodo: id => {
    dispatch(deleteTodo(id))
  },
  getTodo: items => {
    dispatch(getTodo(items))
  },
  markDoneTodo: data => {
    dispatch(markDoneTodo(data))
  }
});
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer