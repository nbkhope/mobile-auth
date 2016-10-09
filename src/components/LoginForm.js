import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  onButtonPress() {
    const { email, password } = this.state;

    // clear up error message
    this.setState({ error: '' });

    // Authenticate with Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        // Attempt to create an account if user does not exist
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication Failed." });
          })
          ;
      })
      ;
  }

  renderErrorMessage() {
    if (this.state.error !== '') {
      return (
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      );
    }
  }

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

        {this.renderErrorMessage()}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
