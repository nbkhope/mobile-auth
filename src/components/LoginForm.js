import React, { Component } from 'react';
// import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = {
    email: ''
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
