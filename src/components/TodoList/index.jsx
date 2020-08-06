import React, {Component} from "react";
import Todo from "../Todo";
import axios from "axios";
import 'antd/dist/antd.css';
import {Card} from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      todoList: props.todoList
    }
  }
    deleteItem = (index) => {
      this.props.deleteTodo(index)
    };

    markDoneTodo = (data) => {
        this.props.markDoneTodo(data);
    };
  componentDidMount() {
    const _this = this;
    axios.get("http://localhost:8080/todos")
        .then(
            res => {
                //console.log(res.data);
              _this.setState({
                isLoaded: true
              });
                this.props.getTodo(res.data)
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
          <Card title="ToDoList">
              {this.props.todoList.map((todo, index) => (
                  <Todo todo = {todo} content = {todo.content} key = {index} id = {todo.id} deleteItem = {this.deleteItem} markDoneTodo = {this.markDoneTodo} status = {todo.status}/>
              ))}
          </Card>
          </div>
      )
    }
    }
}

export default TodoList