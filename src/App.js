import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

import Home from './views/Home'
import UseStateDemo from './views/UseStateDemo'
import UseReducerDemo1 from "./views/UseReducerDemo1";
import UseReducerDemo2 from "./views/UseReducerDemo2";
import UseReducerReplaceRedux from "./views/UseReducerReplaceRedux";
import UserReducerModule from './views/UserReducerModule';
import UseContextDemo1 from './views/UseContextDemo1';
import UseEffectDemo1 from './views/UseEffectDemo1';
import UseLayoutEffectDemo1 from './views/UseLayoutEffectDemo1';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu className="nav" />
        <Main />
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App