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
        axios.put(`https://5e9ec500fb467500166c4658.mockapi.io/todos/${this.props.id}`, {status: !this.props.status})
            .then(
                res => {
                    console.log("id", this.props.id);
                    console.log("props.status", this.props.status);
                    console.log("data.status", res.data.status);
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
        axios.delete(`https://5e9ec500fb467500166c4658.mockapi.io/todos/${this.props.id}`)
            .then(
                res => {
                    this.props.deleteItem(this.props.id);
                    console.log(res.data)
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
                    <Input id={this.props.index} onClick={this.isClick} className = {`${this.props.status ? 'Done' : 'UnDone'}`} value = {this.props.todo} readOnly/>
                    <Button icon={<DeleteOutlined />} onClick={this.deleteToDo}/>
                </Space>
            </Divider>
        )
    }
}

export default Todo