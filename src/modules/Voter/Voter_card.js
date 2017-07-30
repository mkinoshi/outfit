import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class Card extends React.Component {
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
  	console.log('got to voter card');
    return (
      <View style={styles.card}>
      	<View style={styles.innerCard}>
      		
      	</View>
      </View>
    )
  }
}

const styles={
	card: {
		backgroundColor: 'blue',
		flex: 6
	},
	innerCard: {
		margin: 20,
		marginTop: 50,
		flex: 1,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'black'
	}
}

export default Card;