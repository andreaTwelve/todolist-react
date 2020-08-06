import {connect} from "react-redux";
import {deleteTodo, getMarkDoneTodo, markDoneTodo} from "../actions";
import TodoDone from "../components/TodoDone";
const mapStateToProps = (state) => (
    {
      doneTodoList: state.todoList.filter(todo => todo.status === true)
    });
const mapDispatchToProps = dispatch => ({
  deleteTodo: id => {
    dispatch(deleteTodo(id))
  },
  markDoneTodo: data => {
    dispatch(markDoneTodo(data))
  },
  getMarkDoneTodo: () => {
    dispatch(getMarkDoneTodo())
  }
});
const TodoDoneContainer = connect(mapStateToProps, mapDispatchToProps)(TodoDone);
export default TodoDoneContainer