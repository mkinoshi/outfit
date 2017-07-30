import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import Card from './Voter_card';
import StylePoints from './Voter_style_points';
import {getCardThunk} from '../../thunks/getCardThunk';
import {getVoteThunk} from '../../thunks/getVoteThunk';
const {height, width} = Dimensions.get('window');

class VoterMain extends React.Component {
  componentDidMount() {
    //access to userId
    //this.props.getOrCreate(this.props.facebookId, this.props.name)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentCard > 20) {
      nextProps.getMore(this.props.id);
    }
  }
  render() {
    console.log('got to VoterMain');
    // console.log(this.props.cards);
    return (
      <View style={styles.outer}>
  	    <Card style={styles.card} cards={this.props.cards} currentCard={this.props.currentCard} 
        incrementCard={(cardId) => this.props.vote(cardId,this.props.id, 0)}
        voteCard={(cardId, voteId) => this.props.vote(cardId, this.props.id, voteId)} />
  	    <StylePoints style={styles.stylePoints}/>
  	    <StylePoints style={styles.stylePoints} navigate={() => this.props.navigate()}/>
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
  id : state.userReducer.user._id,
  cards: state.cardReducer.cards,
  currentCard: state.cardReducer.currentCard
});

const mapDispatchToProps = (dispatch) => ({
  getMore: (id) => getCardThunk(id)(dispatch),
  getOrCreate: (userId, name) => getUserThunk(userId, name)(dispatch),
  vote: (cardId, userId, vote) => getVoteThunk(cardId, userId, vote)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VoterMain);