import React, { Component } from 'react';

var obj = [];

class TableRow extends React.Component {
    render() {
        const {
            data
        } = this.props;
        const row = data.map((data) =>
            <tr>
                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6" key={data.username}>{data.username}</td>
                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6" key={data.password}>{data.password}</td>
            </tr>
        );
        return (
        <table className="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-bordered">
            <tr>
                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6"><b>User name</b></td>
                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6"><b>Password</b></td>
            </tr>
            {row}
        </table>
        );
    }
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    componentWillMount(){
        this.fetch_info()
    }

    fetch_info(){
        obj = JSON.parse(localStorage.getItem('registeredInfo'))
        console.log(obj);
    }

    render(){
        return (
            <div className="container">
                <h2>Registered user</h2>
                <div className="table-responsive">
                    
                    <TableRow data={obj} />
                    
                </div>
            </div>
        );
    }
}

export default Home