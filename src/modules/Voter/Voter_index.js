import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import Card from './Voter_card';
import StylePoints from './Voter_style_points';

const {height, width} = Dimensions.get('window');

class VoterMain extends React.Component {
  componentDidMount() {
    //access to userId
    //this.props.getOrCreate(this.props.facebookId, this.props.name)
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.facebookId) {
    //   nextProps.getOrCreate(nextProps.facebookId, nextProps.name)
    // }
  }
  render() {
  	console.log('got to VoterMain');
    return (
      <View style={styles.outer}>
  	    <Card style={styles.card}/>
  	    <StylePoints style={styles.stylePoints}/>
      </View>
    )
  }
}

const styles = {
	outer: {
    top: 60,
    height: height-60,
		width: width
	}
}

const mapStateToProps = (state) => ({
  // imageA: state.cardRedu
  // imageB:
  // stylePoints:
});

const mapDispatchToProps = (dispatch) => ({
  getOrCreate: (userId, name) => getUserThunk(userId, name)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VoterMain);