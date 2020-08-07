import React, {Component} from "react";
import axios from "axios"
import "./index.css"
import {Divider, Input, Space, Button} from "antd";
import { DeleteOutlined } from '@ant-design/icons';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done:true,
        }
    }

    isClick = () => {
        axios.put(`http://localhost:9090/todos/${this.props.id}`,
            {
              id: this.props.id,
              content: this.props.content,
              status: !this.props.status
            })
            .then(
                res => {
                  this.props.markDoneTodo(res.data);
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
    };

    deleteToDo = (event) => {
        console.log(this.props.id);
        axios.delete(`http://localhost:9090/todos/${this.props.id}`)
            .then(
                res => {
                    this.props.deleteItem(this.props.id);
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )

    };

    render() {
        return (
            <Divider>
                <Space>
                    <Input id={this.props.index} onClick={this.isClick} className = {`${this.props.status ? 'Done' : 'UnDone'}`} value = {this.props.content} readOnly/>
                    <Button icon={<DeleteOutlined />} onClick={this.deleteToDo}/>
                </Space>
            </Divider>
        )
    }
}

export default Todo