import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class Main extends React.Component {
  componentDidMount() {
    //access to userId
    console.log("hhrhrhrhrhr");
    console.log(this.props);
  }
  render() {
    return (
      <Text>This is main</Text>
    )
  }
}

const mapStateToProps = (state) => ({
  facebookId: state.LoginReducer.facebookId
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);