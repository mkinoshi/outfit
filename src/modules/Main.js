import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import {getUserThunk} from '../thunks/getUserThunk';

class Main extends React.Component {
  componentDidMount() {
    //access to userId
    console.log("hhrhrhrhrhr");
    console.log(this.props);
    console.log(this.props.facebookId);
    console.log( this.props.name);
    this.props.getOrCreate(this.props.facebookId, this.props.name)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.facebookId) {
      console.log(nextProps.facebookId);
      console.log( nextProps.name);
      nextProps.getOrCreate(nextProps.facebookId, nextProps.name)
    }
  }
  render() {
    return (
      <Text>This is main</Text>
    )
  }
}

const mapStateToProps = (state) => ({
  facebookId: state.userReducer.facebookId,
  name: state.userReducer.name
});

const mapDispatchToProps = (dispatch) => ({
  getOrCreate: (userId, name) => getUserThunk(userId, name)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);