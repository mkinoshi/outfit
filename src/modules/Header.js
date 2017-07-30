import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import {Image} from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';


class Main extends React.Component { 

  handleModal() {
    this.props.openModal();
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
       <Container style={{top: 0, zIndex: 5}}>
        <Header style={{backgroundColor: 'white'}} >
          <Left>
            <Button transparent>
              {/* <Icon name='arrow-back' /> */}
            </Button>
          </Left>
          <Body>
            <Button style={{backgroundColor: 'white'}} onPress={() => this.props.onLogoClick()}>
                <Image style={{width: 140}} source={require('../../assets/Logo.jpeg')}/>
            </Button>
          </Body>
          <Right>
            <Button transparent onPress={() => this.handleModal()}>
              <Icon name='camera' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    dispatch({type: 'OPEN_FIRST_MODAL'});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)