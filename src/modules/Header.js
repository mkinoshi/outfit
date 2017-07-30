import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import {Image} from 'react-native';
import { ImagePicker } from 'expo';

export default class Main extends React.Component { 

  handlecamera() {
    // console.log('you are taking a camera');
    // takeImage = async () => {
    //   let result = await ImagePicker.launchCameraAsync({
    //     quality: 0.75,
    //     base64: true,
    //     exif: true,
    //   });
    //   console.log("TAKE IMAGE", result.uri);

    //   // if (!result.cancelled) {
    //   //   AsyncStorage.setItem('image', result.uri).then(() => {
    //   //     this.props.navigation.navigate('VisionTest');
    //   //   });
    //   // }
    // };
    // takeImage()
  }

  render() {
    return (
       <Container style={{top: 0}}>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <Button transparent>
              {/* <Icon name='arrow-back' /> */}
            </Button>
          </Left>
          <Body>
            <Button style={{backgroundColor: 'white'}}>
              <Image style={{height: 60, width: 60}} source={{uri: 'http://i.imgur.com/zW9gewW.png'}}/>
            </Button>
          </Body>
          <Right>
            <Button transparent onPress={() => this.handlecamera()}>
              <Icon name='camera' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}
