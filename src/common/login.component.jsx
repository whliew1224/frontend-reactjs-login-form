import React, { Component } from 'react';
import { BrowserRouter, Route, browserHistory, IndexRoute, HashRouter, Switch } from 'react-router-dom'
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick(){
        //localStorage.clear();
        var username = this.state.username;
        var password = this.state.password;
        if (username == '' || password == ''){
            alert("please enter username/password");
            return;
        }

        var allInfo = [];
        if (localStorage.getItem("registeredInfo") !== null){
            allInfo = JSON.parse(localStorage.getItem("registeredInfo"));
        } else {
            alert("No username found for (" + username + "). Please register first");
            return;
        }
        

        for (var i = 0; i < allInfo.length; i++) { 
            if (allInfo[i].username == username){
                if (allInfo[i].password == password){
                    alert("Login successfully");
                    this.props.history.push("/dash");
                    return;
                } else {
                    alert("Incorrect password");
                    return;
                }
            }
        }
        
        alert("No username found for (" + username + "). Please register first");
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    render(){
        return (
            <div className="container containerWidth">
                <div className="panel panel-default">
                    <div className="panel-heading panelStyle">
                        <h2>Login</h2>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"
                            value={this.state.username} 
                            onChange={ this.handleChangeUsername.bind(this) }/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                            value={this.state.password} 
                            onChange={ this.handleChangePassword.bind(this) }/>
                        </div>
                    </div>
                    <div className="panel-footer panelStyle">
                        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>
                            Login
                        </button>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Login