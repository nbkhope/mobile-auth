import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: false,
  };

  componentWillMount() {
    // set up firebase
    firebase.initializeApp({
      apiKey: "AIzaSyCVfI9F3y5U7AWoDVLZMEKurkzZ-vDDnAM",
      authDomain: "mobile-auth-d87b3.firebaseapp.com",
      databaseURL: "https://mobile-auth-d87b3.firebaseio.com",
      storageBucket: "mobile-auth-d87b3.appspot.com",
      messagingSenderId: "737921963466"
    });

    // event handler to know when user has signed in/out
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header title="Mobile Auth" />
        <Text>Welcome!</Text>
        <LoginForm />
      </View>
    );
  }
}

export default App;
