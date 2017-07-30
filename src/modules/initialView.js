import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import {LoginThunk} from '../thunks/LoginThunk';
import Main from './Main.js';

class InitView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    AsyncStorage.getItem('user')
    .then((user) => {
      console.log("yoyoyoyoyoyoy")
      console.log(user);
      if (user) {
        // this.props.onLogin(data); // access to database ?
        this.props.setLogin(user);
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
        <Button
          onPress={() => this.props.onLogin()}
          title="Continue with fb"
          color="#4267B2"
        />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.LoginReducer
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: (userId) => dispatch({type: 'GET_USER_DATA_DONE', userId: userId}),
  onLogin: () => LoginThunk(dispatch),
  openLogin: () => dispatch({type: 'OPEN_LOGIN'})
});

export default connect(mapStateToProps, mapDispatchToProps)(InitView);