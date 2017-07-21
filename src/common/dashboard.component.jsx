import React, { Component } from 'react';
import { BrowserRouter, Route, browserHistory, IndexRoute, HashRouter, Switch } from 'react-router-dom'
class Dashboard extends Component {
    render(){
        return (
            <div className="container containerWidth">
                <h2>You're logon now. =)</h2>
            </div>
        );
    }
}

export default Dashboard