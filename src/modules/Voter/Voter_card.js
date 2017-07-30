import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions, Image } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import DoubleClick from 'react-native-double-click';
const {height, width} = Dimensions.get('window');

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
  }
  componentDidMount() {
    //access to userId
    //this.props.getOrCreate(this.props.facebookId, this.props.name)
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.facebookId) {
    //   nextProps.getOrCreate(nextProps.facebookId, nextProps.name)
    // }
  }

  onSwipeUp(cardId) {
    this.props.incrementCard(cardId);
  }

  handleDoubleClick(cardId, voteId) {
    console.log('voted!!');
    this.props.voteCard(cardId, voteId)
  }

  render() {
    return (
      
        <View style={styles.card}>
           {this.props.cards.length > 0 ? 
            (
            <Swiper showsPagination={true} loop={false} style={styles.card}
            > 
              <GestureRecognizer
                onSwipeUp={() => this.onSwipeUp(this.props.cards[this.props.currentCard]._id)}
                style={styles.innerCard}
              >
                <DoubleClick onClick={() => this.handleDoubleClick(this.props.cards[this.props.currentCard]._id, 1)}>
                  <View>
                    <Text>{this.state.test}</Text>
                    <Image source={{uri: this.props.cards[this.props.currentCard].imageA}}
                      style={{width: width-44, height: height-230}}
                    />
                  </View>
                </DoubleClick>
              </GestureRecognizer>
              <GestureRecognizer
                onSwipeUp={() => this.onSwipeUp(this.props.cards[this.props.currentCard]._id)}
                style={styles.innerCard}
              >
                <DoubleClick onClick={() => this.handleDoubleClick(this.props.cards[this.props.currentCard]._id, 2)}>
                  <View>
                    <Text>{this.state.test}</Text>
                    <Image source={{uri: this.props.cards[this.props.currentCard].imageB}}
                      style={{width: width-44, height: height-230}}
                    />
                  </View>
                </DoubleClick>
              </GestureRecognizer>
          </Swiper> ) :
            null}
        </View>
    )
  }
}

// const mapStateToProps = (state) => ({
//   cards: state.cardReducer.cards,
//   currentCard: state.cardReducer.currentCard
// });

// const mapDispatchToProps = (dispatch) => ({
//   incrementCard: () => dispatch({type: 'INCREMENT_CARD'})
// });


const styles={
	card: {
		height: height-120,
    display: 'flex'
	},
  swiper: {
    flex: 1
  },
	innerCard: {
		margin: 20,
		marginTop: 50,
    marginBottom: 150,
		flex: 1,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'black'
	}
}

export default Card;