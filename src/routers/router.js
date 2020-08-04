import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ToDoFormContainer from "../containers/ToDoFormContainer";
import ToDoListContainer from "../containers/ToDoListContainer";

function A() {
  return (
      <div>
        <ToDoFormContainer/>
        <ToDoListContainer/>
      </div>
  )
}

export default function R() {
  return (
      <Router>
        <ul>
          <li><Link to="/b">ToDoListContainer</Link></li>
        </ul>
        <Route>
          <Switch>
            <Route path="/b" component={ToDoListContainer}/>
            <Route path="/" component={A}/>
          </Switch>
        </Route>
        <Route>

        </Route>
      </Router>
  )
}
