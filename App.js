import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DisplayAnImage from './src/displayImage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DisplayAnImage></DisplayAnImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
