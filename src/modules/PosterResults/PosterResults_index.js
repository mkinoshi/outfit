import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import PosterResultsCard from './PosterResults_Card';
import PosterResultsBanner from './PosterResults_Banner';

const {height, width} = Dimensions.get('window');

class PosterResultsMain extends React.Component {
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
        <PosterResultsCard style={styles.card}/>
        <PosterResultsBanner style={styles.stylePoints} navigate={() => this.props.navigate()}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PosterResultsMain);