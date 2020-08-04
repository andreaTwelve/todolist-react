import React, {Component} from "react";
class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done:true,
        }
    }

    isClick = (event) => {
        this.setState({
            done: !this.state.done
        });
        if (this.state.done) {
            event.target.style.textDecoration = "line-through"
        } else {
            event.target.style.textDecoration = "none"
        }
    };

    deleteToDo = (event) => {
        console.log(event.target.id);
        this.props.deleteItem(event.target.id)
    };

    render() {
        return (
            <div>
                <input id={this.props.index} onClick = {this.isClick} value = {this.props.todo} readOnly/>
                <input type = "button" value = "X" onClick={this.deleteToDo}/>
            </div>
        )
    }
}

export default ToDo