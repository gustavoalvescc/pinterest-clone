import React from 'react';
import {withRouter} from 'react-router-dom';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(){
    this.props.history.push("/home");
  }
  render(){
    return (
      <div className="login-container">
        <div className="input-container">
          <label forhtml="user_login">User</label>
          <input type="text" id="user_login" />
        </div>
        <div className="input-container">
          <label forhtml="pass_login">Password</label>
          <input type="password" id="pass_login" />
        </div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
};