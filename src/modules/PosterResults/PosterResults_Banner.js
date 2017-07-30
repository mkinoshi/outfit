import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Modal, TouchableHighlight, Dimensions, Image } from 'react-native';
import { Constants } from 'expo';
const {height, width} = Dimensions.get('window');

class PosterResultsBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
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

  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
    return (
      <View style={{zIndex: 0}}>
        <View
        style={styles.stylePoints}
        onPress={() => {
          this.setModalVisible();
        }}>
          <Text>Double-tap your final decision!</Text>
        </View>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    paddingRight: 7, 
    // 
    // rgba(22, 208, 81, 0.25)
    // 
  }, 
  outfit: {
    display: 'flex',
  },
  image: {
    width: 123, 
    height: 164, 
    borderRadius: 10
  }, 
  text: {
    marginTop: 1, 
    fontSize: 20
  },
  stylePoints: {
    height: 60,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  history: {
    height: 50,
    borderColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default PosterResultsBanner;
