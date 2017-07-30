import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet,  Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';
const uuidv4 = require('uuid/v4');

class PosterMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }
  // static navigationOptions = {
  //   title: 'Poster',
  // };

  componentDidMount() {
    axios('https://vast-beach-20437.herokuapp.com/getmycards/' + this.props.id)
    .then((response) => {
      console.log('hi');
      this.setState({cards: response.data.cards});
      console.log(response.data.cards);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.cards.map((card) => (
          <TouchableOpacity style={styles.card}
            onPress={() => {this.props.navigate(card._id)}}
            key={uuidv4()}
          >
           <View style={styles.outfit}>
            <Image
            style={styles.image}
            source={{uri: card.imageA}}
            />
            <Text style={styles.text}>45%</Text>
          </View>
          <View style={styles.outfit}>
            <Image
            style={styles.image}
            source={{uri: card.imageB}}
            />
            <Text style={styles.text}>55%</Text>
          </View>  
          </TouchableOpacity>
          ))}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  }, 
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300, 
    height: 230, 
    backgroundColor: 'white', 
    borderStyle: 'solid',
    borderColor: '#51a2ff',
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 7, 
    marginBottom: 7, 
    paddingTop: 12, 
    paddingLeft: 7, 
    paddingRight: 7
  }, 
  outfit: {
    display: 'flex',
    alignItems: 'center', 
    marginLeft: 5, 
    marginRight: 5
  },
  image: {
    width: 126, 
    height: 172, 
    borderRadius: 10
  }, 
  text: {
    marginTop: 8, 
    fontSize: 20
  }
});


const mapStateToProps = (state) => ({
  cards: state.userReducer.user.myCards,
  id: state.userReducer.user._id
});

const mapDispatchToProps = (dispatch) => ({
  getOrCreate: (userId, name) => getUserThunk(userId, name)(dispatch),
  getCard: (id) => getCardThunk(id)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PosterMain);
