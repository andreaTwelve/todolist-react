import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Card} from "antd";
import Todo from "../Todo";
class TodoDone extends Component{
  constructor(props) {
    super(props);
    this.state = {
      doneTodoList: []
    }
  }

  deleteItem = (index) => {
    this.props.deleteTodo(index)
  };

  markDoneTodo = (data) => {
    this.props.markDoneTodo(data);
  };

  componentDidMount = () => {
    console.log(this.props.doneTodoList);
    };

    render() {
        return (
            <div>
              <Card title="DoneToDoList">
                {this.props.doneTodoList.map((todo, index) => (
                    <Todo todo = {todo} content = {todo.content} key = {index} id = {todo.id} deleteItem = {this.deleteItem} markDoneTodo = {this.markDoneTodo} status = {todo.status}/>
                ))}
              </Card>
            </div>
        )
    }
}

export default TodoDone