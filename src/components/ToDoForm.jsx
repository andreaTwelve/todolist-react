import React, {Component} from "react";
import axios from "axios"

class ToDoForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onsubmit = (event) => {
        event.preventDefault();
        axios.post("https://5e9ec500fb467500166c4658.mockapi.io/todos", this.state.text)
            .then(res => {
                this.props.addToDo(this.state.text);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    };

    inputText = (event) => {
        let text = event.target.value;
        this.setState( {
            text: text
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit}>
                    <input type="text" onChange={this.inputText}/>
                    <input type="submit" value = "add" />
                </form>
            </div>
        )
    }
}

export default ToDoForm