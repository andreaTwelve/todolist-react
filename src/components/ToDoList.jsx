import React, {Component} from "react";
import ToDo from "../components/ToDo"

class ToDoList extends Component {
    deleteItem = (index) => {
        console.log(this.props);
      this.props.deleteTodo(index)
    };
    render() {
        return (
            <div>
                <a href="/">back</a>
                {this.props.todoList.map((todo, index) => (
                <ToDo todo = {todo} key = {index} index = {index} deleteItem = {this.deleteItem}/>
                ))}
            </div>
        )
    }
}

export default ToDoList