import React, { Component } from 'react';
// import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@mail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
