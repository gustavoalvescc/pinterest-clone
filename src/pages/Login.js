import React from 'react';

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
        <div className="app-name">
          PINTEREST-CLONE
        </div>
        <div className="input-container">
          <label forhtml="user_login">User</label>
          <input type="text" id="user_login" />
        </div>
        <div className="input-container">
          <label forhtml="pass_login">Password</label>
          <input type="password" id="pass_login" />
        </div>
        <a class="btn btn-raised btn-primary" onClick={this.handleLogin}>Login</a>
      </div>
    );
  }
};