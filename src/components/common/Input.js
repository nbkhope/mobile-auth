import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={{ height: 20, width: 100 }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };
