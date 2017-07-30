import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class StylePoints extends React.Component {
  componentDidMount() {
    //access to userId
    //this.props.getOrCreate(this.props.facebookId, this.props.name)
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.facebookId) {
    //   nextProps.getOrCreate(nextProps.facebookId, nextProps.name)
    // }
  }
  render() {
    return (
      <View style={styles.stylePoints}>
        <Text>Style Points: (style points)</Text>
      </View>
    )
  }
}

const styles = {
  stylePoints: {
    backgroundColor: 'red',
    flex: 1,
    borderWidth: 2,
    borderColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default StylePoints;