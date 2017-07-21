import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, browserHistory, IndexRoute, HashRouter, Switch } from 'react-router-dom'

import Home from './common/home.component.jsx'
import Login from './common/login.component.jsx'
import Signup from './common/signup.component.jsx'
import Dashboard from './common/Dashboard.component.jsx'
import Main from './common/main.component.jsx'


render(
    <div className="App">
        <Main />
        <HashRouter history={browserHistory}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/dash" component={Dashboard}/>
            </Switch>
        </HashRouter>
    </div>,
    document.getElementById('container')
);