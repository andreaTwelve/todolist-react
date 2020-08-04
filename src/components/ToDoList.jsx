import React, {Component} from "react";
import ToDo from "../components/ToDo";
import axios from "axios";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      todoList: props.todoList
    }
  }
    deleteItem = (index) => {
        console.log(this.props);
      this.props.deleteTodo(index)
    };
  componentDidMount() {
    const _this = this;
    axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos")
        .then(
            response => {
              _this.setState({
                todoList: response.data,
                isLoaded: true
              })
            }
        )
        .catch(
            error => {
              console.log(error);
              _this.setState({
                isLoaded: false,
                error: error
              })
            }
        )
  }

  render() {
    if(!this.state.isLoaded) {
      return <div>Loading</div>
    } else {
      return (
          <div>
            {this.props.todoList.map((todo, index) => (
                <ToDo todo = {todo} key = {index} index = {index} deleteItem = {this.deleteItem}/>
            ))}
          </div>
      )
    }
    }
}

export default ToDoList