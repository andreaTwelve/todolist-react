import React, {Component} from "react";
import axios from "axios"
import 'antd/dist/antd.css';
import {Input, Divider, Space} from "antd";

class TodoForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    onsubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9090/todos", {content: this.state.content})
            .then(res => {
                this.props.addToDo(res.data);
            })
            .catch(err => {
                console.log(err)
            })

    };

    inputText = (event) => {
        let content = event.target.value;
        this.setState( {
            content: content
        })
    };

    render() {
        return (
            <div>
                <Divider>
                    <Space>
                        <Input type="text" onChange={this.inputText}/>
                        <Input type="submit" value = "add" onClick={this.onsubmit}/>
                    </Space>
                </Divider>
            </div>
        )
    }
}

export default TodoForm