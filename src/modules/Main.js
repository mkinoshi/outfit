import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import {getUserThunk} from '../thunks/getUserThunk';
import Header from './Header.js';
const {height, width} = Dimensions.get('window');
import VoterMain from './Voter/Voter_index';
import NewModal from './Modal.js';

class Main extends React.Component {
  componentDidMount() {
    //access to userId
    //this.props.getOrCreate(this.props.facebookId, this.props.name)
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props is here');
    console.log(nextProps);
    if (nextProps.facebookId) {
      nextProps.getOrCreate(nextProps.facebookId, nextProps.name)
    }
  }

  render() {
    console.log(this.props);
    return (
      <View >
        <Header style={{top: '0'}}/>
        <VoterMain style={{top: '80'}}/>
        {this.props.isOpen ? <NewModal /> :null}
      </View>
    )
  }
}

const styles = {
  outer: {
    flex: 1,
    flexDirection: 'column',
    width: width
  }
}

const mapStateToProps = (state) => ({
  facebookId: state.userReducer.facebookId,
  name: state.userReducer.name,
  isOpen: state.modalReducer.isModalOpen
});

const mapDispatchToProps = (dispatch) => ({
  getOrCreate: (userId, name) => getUserThunk(userId, name)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);