import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;

    // clear up error message & set loading
    this.setState({ error: '', loading: true });

    // Authenticate with Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        // Attempt to create an account if user does not exist
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(this.onLoginFail.bind(this))
          ;
      })
      ;
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  onLoginSuccess() {
    // clear up error messages
    // clean up form
    // get rid of spinner
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
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
          {this.renderButton()}
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
