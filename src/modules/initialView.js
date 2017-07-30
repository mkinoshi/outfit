import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions, Image } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import {LoginThunk} from '../thunks/LoginThunk';
import Main from './Main.js';
const {height, width} = Dimensions.get('window');

class InitView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    AsyncStorage.getItem('user')
    .then((user) => {
      const data = JSON.parse(user);
      if (data) {
        // this.props.onLogin(data); // access to database ?
        this.props.setLogin(data.id, data.name);
        // this.props.getOrCreate(user, null, null);
      } else {
        this.props.openLogin();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    console.log(this.props);
    return(
      <View>
        {this.props.isLoggedIn ? 
        <Main />:
        <View style={{width: width, height: height}}>
          <View style={{marginLeft: 70, marginRight: 100, marginTop: 250}}>
            <Image source={{url: 'http://i.imgur.com/GCCxcZZ.png'}} style={{width: 250, height: 120}}/>
            <Button
            onPress={() => this.props.onLogin()}
            title="Continue with FB"
            color="#4267B2"
          />
          </View>
        </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: (userId, name) => dispatch({type: 'GET_USER_DATA_DONE', userId: userId, name: name}),
  onLogin: () => LoginThunk(dispatch),
  openLogin: () => dispatch({type: 'OPEN_LOGIN'})
});

export default connect(mapStateToProps, mapDispatchToProps)(InitView);