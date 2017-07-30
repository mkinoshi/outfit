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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button
          onPress={() => this.props.onLogin()}
          title="Continue with fb"
          color="#4267B2"
        />
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