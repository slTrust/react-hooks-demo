import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './main.scss'

import Home from '../../views/Home'
import UseStateDemo from '../../views/UseStateDemo'
import UseReducerDemo1 from "../../views/UseReducerDemo1";
import UseReducerDemo2 from "../../views/UseReducerDemo2";
import UseReducerReplaceRedux from "../../views/UseReducerReplaceRedux";
import UserReducerModule from '../../views/UserReducerModule';
import UseContextDemo1 from '../../views/UseContextDemo1';
import UseEffectDemo1 from '../../views/UseEffectDemo1';
import UseLayoutEffectDemo1 from '../../views/UseLayoutEffectDemo1';
import UseMemoDemo1 from '../../views/UseMemoDemo1';
import UseMemoDemo2 from '../../views/UseMemoDemo2';
import UseRefDemo1 from '../../views/UseRefDemo1';
import UseForwardRefDemo from '../../views/UseForwardRefDemo';
import SetRefDemo from '../../views/SetRefDemo';
import HooksDemo from '../../views/HooksDemo';


function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path="/use_state_demo">
          <UseStateDemo />
        </Route>
        <Route path="/use_reducer_demo1">
          <UseReducerDemo1 />
        </Route>
        <Route path="/use_reducer_demo2">
          <UseReducerDemo2 />
        </Route>
        <Route path="/use_reducer_replace_redux">
          <UseReducerReplaceRedux />
        </Route>
        <Route path="/use_reducer_module">
          <UserReducerModule />
        </Route>
        <Route path="/use_context_demo1">
          <UseContextDemo1 />
        </Route>
        <Route path="/use_effect_demo1">
          <UseEffectDemo1 />
        </Route>
        <Route path="/use_layout_effect_demo1">
          <UseLayoutEffectDemo1 />
        </Route>
        <Route path="/use_memo_demo1">
          <UseMemoDemo1 />
        </Route>

        <Route path="/use_memo_demo2">
          <UseMemoDemo2 />
        </Route>

        <Route path="/use_ref_demo1">
          <UseRefDemo1 />
        </Route>
        <Route path="/use_forward_ref_demo">
          <UseForwardRefDemo />
        </Route>
        <Route path="/set_ref_demo">
          <SetRefDemo />
        </Route>

        <Route path="/hooks_demo">
          <HooksDemo />
        </Route>









        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;