import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import PosterResultsCard from './PosterResults_Card';
import PosterResultsBanner from './PosterResults_Banner';
import axios from 'axios';

const {height, width} = Dimensions.get('window');

class PosterResultsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: ''
    }
  }

  // componentDidMount() {
  //   console.log('what the fuck', this.props.cardId)
  //   axios('https://vast-beach-20437.herokuapp.com/' + this.props.cardId)
  //   .then((response) => {
  //     this.setState({card: response.data.card})
  //     console.log(response);
  //   })
  // }

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
});

const mapDispatchToProps = (dispatch) => ({
  getOrCreate: (userId, name) => getUserThunk(userId, name)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PosterResultsMain);