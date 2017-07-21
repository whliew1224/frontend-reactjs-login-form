import React, { Component } from 'react';

class Signup extends Component {
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
        var allInfo = [];
        if (localStorage.getItem("registeredInfo") !== null)
            allInfo = JSON.parse(localStorage.getItem("registeredInfo"));
        console.log(JSON.stringify(allInfo));
        var username = this.state.username;
        var password = this.state.password;
        if (username == '' || password == ''){
            alert("please enter username/password");
            return;
        }
        if (allInfo !== null){
            for (var i = 0; i < allInfo.length; i++) { 
                if (allInfo[i].username == username){
                    alert("Username exists");
                    return;
                }
            }
        }
        allInfo.push(this.state);
        localStorage.setItem('registeredInfo', JSON.stringify(allInfo));
        alert("Registered succesfully");
        this.props.history.push("/login");
        
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
                        <h2>Registration</h2>
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
                            Register
                        </button>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Signup;

