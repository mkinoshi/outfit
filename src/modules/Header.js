import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import {Image, AsyncStorage} from 'react-native';
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

  handleLogout() {
    AsyncStorage.removeItem('user')
    this.props.onLogout();
  } 

  render() {
    let backArrow = false;
    if ((this.props.page === 'voterResults') || (this.props.page === 'posterResults')) {
      backArrow = true;
      console.log('went in here');
    }
    return (
       <Container style={{top: 0, zIndex: 5}}>
        <Header style={{backgroundColor: 'white'}} >
          <Left>
            {backArrow ?
            <Button transparent onPress={() => this.props.handleBack()}>
              <Icon name='arrow-back' /> 
            </Button> :
             <Button transparent onPress={() => this.handleLogout()}>
              <Icon name='ios-log-out' style={{fontSize: 24}} />
            </Button> }
          </Left>
          <Body>
            <Button style={{backgroundColor: 'white'}} onPress={() => this.props.onLogoClick()}>
                <Image style={{width: 140}} source={require('../../assets/Logo.jpeg')}/>
            </Button>
          </Body>
          <Right>
            <Button transparent onPress={() => this.handleModal()}>
              <Icon name='ios-shirt-outline' style={{fontSize: 24}} />
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
  },
  onLogout: () => dispatch({type: 'LOG_OUT'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)