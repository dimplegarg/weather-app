import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`

const Heading = styled.h1`
  display: block;
  height: 64px;
  margin: 0;
  padding: 20px 0;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  transition: 0.3s 1.4s;
 `;

export default class Login extends Component {
  responseGoogle = response => {
    console.log('google response>>>', response);
    if(response) {
        localStorage.setItem('token', response.accessToken)
        this.props.history.push('/weather');
    }
  };

  render() {
    return (
      <LoginWrapper>
        <Heading>Login</Heading>
        <div>
            <GoogleLogin
            clientId="464743414039-53n9nmi4oo8kqdvjg8ivi5slu7prmtkr.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
      </LoginWrapper>
    );
  }
}
