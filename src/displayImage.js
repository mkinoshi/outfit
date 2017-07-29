import React, { Component } from 'react';
import { View, Image } from 'react-native';

//call this component with a prop
export default class DisplayAnImage extends Component {
  constructor(props) {
      super(props);
      this.state = {
          url: "https://facebook.github.io/react/img/logo_og.png",
      }
  }

  render() {
    return (
      <View>
        {/* <Image
          //change source to this.state.url
          source={require('../assets/img/elon-musk.png')}
        /> */}
        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.state.url}}
        />
      </View>
    );
  }
}
