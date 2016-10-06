import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <View>
        <Header title="Mobile Auth" />
        <Text>Welcome!</Text>
      </View>
    );
  }
}

export default App;
