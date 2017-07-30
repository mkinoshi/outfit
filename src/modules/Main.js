import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import {getUserThunk} from '../thunks/getUserThunk';
import VoterMain from './Voter/Voter_index';

class Main extends React.Component {
  componentDidMount() {
    //access to userId
    //this.props.getOrCreate(this.props.facebookId, this.props.name)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.facebookId) {
      nextProps.getOrCreate(nextProps.facebookId, nextProps.name)
    }
  }
  render() {
    return (
      <VoterMain style={styles.outer}/>
    )
  }
}

const styles = {
  outer: {
    flex: 1,
    flexDirection: 'row'
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