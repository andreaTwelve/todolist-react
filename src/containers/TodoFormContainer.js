import {connect} from "react-redux";
import {addTodo} from "../actions";
import TodoForm from "../components/TodoForm"

const mapDispatchToProps = dispatch => ({
  addToDo: content => {
    dispatch(addTodo(content))
  }
});
const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);
export default TodoFormContainer;