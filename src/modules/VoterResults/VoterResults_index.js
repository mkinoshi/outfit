import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import VoterResultsCard from './VoterResults_Card';
import VoterResultsBanner from './VoterResults_Banner';

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
    return (
      <View style={styles.outer}>
        <VoterResultsCard style={styles.card}/>
        <VoterResultsBanner style={styles.stylePoints} navigate={() => this.props.navigate()}/>
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