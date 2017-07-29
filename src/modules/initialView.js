import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import {LoginThunk} from '../thunks/LoginThunk';

class InitView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log(state);
    this.props.onLogin();
  }

  render() {
    console.log(this.props);
    return(
      <View>
        {this.props.isLoggedIn ? 
        <Text>You are logged In</Text> :
        <Text>Initial page</Text>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.LoginReducer
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => LoginThunk(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(InitView);