import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import TodoFormContainer from "../containers/TodoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";
import TodoDone from "../components/TodoDone";

export default function todoListRouter() {
  return (
      <Router>
        <ul>
          <li><Link to="/todoList">TodoList</Link></li>
          <li><Link to="/doneTodoList">DoneTodoList</Link></li>
        </ul>
          <TodoFormContainer/>
          <Switch>
              <Route exact path="/" component={TodoListContainer}/>
              <Route exact path="/todoList" component={TodoListContainer}/>
              <Route exact path="/doneTodoList" component = {TodoDone}/>
          </Switch>
      </Router>
  )
}
