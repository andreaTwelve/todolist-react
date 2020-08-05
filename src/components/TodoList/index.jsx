import React, {Component} from "react";
import Index from "../Todo";
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

    getDoneTodo = (id) => {
        this.props.getDoneTodo(id);
    };
  componentDidMount() {
    const _this = this;
    axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos")
        .then(
            res => {
                console.log(res.data);
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
                  <Index todo = {todo.content} key = {index} id = {todo.id} deleteItem = {this.deleteItem} getDoneTodo = {this.getDoneTodo}/>
              ))}
          </Card>
          </div>
      )
    }
    }
}

export default TodoList