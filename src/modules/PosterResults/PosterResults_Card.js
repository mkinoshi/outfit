import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions, Image } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Swiper from 'react-native-swiper';
const {height, width} = Dimensions.get('window');

class PosterResultsCard extends React.Component {
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
    return (
      
        <View style={styles.card}>
          <Text>Your Results</Text>
          <Swiper showsPagination={true} loop={false} style={styles.card}
          >
            <GestureRecognizer
              onSwipeUp={() => this.onSwipeUp()}
              style={styles.innerCard}
            >
              <View>
                <Text>{this.state.test}</Text>
                <Image source={{uri: 'http://worldinsidepictures.com/wp-content/uploads/2013/11/1926.jpg'}}
                  style={{width: width-44, height: height-230}}
                />
                <Text style={{backgroundColor: 'red'}}>
                  79% of voters chose this option
                </Text>
              </View>
            </GestureRecognizer>
            <GestureRecognizer
              onSwipeUp={() => this.onSwipeUp()}
              style={styles.innerCard}
            >
              <View>
                <Text>{this.state.test}</Text>
                <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/be/63/73/be6373a5a4d89a43ac74664ec470fc4b--christmas-party-outfit-winter-party-outfit.jpg'}}
                  style={{width: width-44, height: height-230}}
                />
                <Text style={{backgroundColor: 'red'}}>
                  79% of voters chose this option
                </Text>
              </View>
            </GestureRecognizer>
          </Swiper>
        </View>
    )
  }
}

const styles={
	card: {
		height: height-120,
    display: 'flex',
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

export default PosterResultsCard;