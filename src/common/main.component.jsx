import React, {Component} from 'react';

class Main extends Component {

    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Navigation bar</a>
                        </div>
                        <ul className="nav navbar-nav pull-right">
                            <li><a href="#/signup">Sign Up</a></li>
                            <li><a href="#/login">Login</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main