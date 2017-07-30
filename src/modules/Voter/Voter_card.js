import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Swiper from 'react-native-swiper';
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

  onSwipeUp() {
    this.setState({test: 'otto'});
  }

  render() {
  	console.log('got to voter card');
    return (
      
        <View style={styles.card}>
          <Swiper showsPagination={true}
          
          >
            <GestureRecognizer
              onSwipeUp={() => this.onSwipeUp()}
              style={styles.innerCard}
            >
              <View>
                <Text>{this.state.test}</Text>
              </View>
            </GestureRecognizer>
            <GestureRecognizer
              onSwipeUp={() => this.onSwipeUp()}
              style={styles.innerCard}
            >
              <View>
                <Text>{this.state.test}</Text>
              </View>
            </GestureRecognizer>
          </Swiper>
        </View>
    )
  }
}

const styles={
	card: {
		backgroundColor: 'blue',
		height: height-120,
    display: 'flex'
	},
	innerCard: {
		margin: 20,
		marginTop: 50,
    marginBottom: 150,
		flex: 1,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'black'
	}
}

export default Card;