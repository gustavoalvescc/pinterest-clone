import React from 'react';
import { GoogleLogin } from 'react-google-login';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(){
    this.props.history.push("/home");
  }


  googleResponse = (response) => {
    console.log('beleza '+ response.accessToken);
    const tokenBlob = JSON.stringify({access_token: response.accessToken}, {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };
    //var token = 'ya29.GlxHBv9zL_v6Fo54g4lLz_8jKn-zVFL3fsEIbQtIGq0oec6GfXm9b8gzpLgVnWHu6sa9X4oF4s9EvmKOGy2JfQpGyWrIdzhSH6qlBUkQO3yWW6yqI-obaCRoj6lXMA';
    fetch(`http://localhost:3000/auth/google?access_token=${response.accessToken}`).then(r => {
        console.log(r);
        const token = r.headers.get('x-auth-token');
        console.log('token: ', token)
        r.json().then(user => {
            if (token) {
                this.setState({isAuthenticated: true, user, token})
            }
        });
    })
};

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
        <GoogleLogin
            clientId="567517796763-406ja47bp7ptc75cscu5qdpd275d402v.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.onFailure}
        />
      </div>
    );
  }
};