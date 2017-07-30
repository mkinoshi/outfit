import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Modal, TouchableHighlight, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
// import Main from '../Main';
// import VoterResultsMain from '../VoterResults/VoterResults_index'
const {height, width} = Dimensions.get('window');

class StylePoints extends React.Component {
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
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          // style={}
          maxHeight={height-60}
          >
         <View style={styles.container}>
          <View>

            <TouchableHighlight onPress={() => {
              this.setModalVisible();
            }}>
              <Text style={{textAlign: 'right'}}>X</Text>
            </TouchableHighlight>

            <ScrollView>
              <TouchableOpacity style={styles.container}
              onPress={() => this.props.navigate()}
            >
              <View style={styles.card}> 
               <View style={styles.outfit}>
                <Image
                style={styles.image}
                source={{url: 'http://images.askmen.com/fashion/style_icon/33_style-icon-brad-pitt.jpg'}}
                />
                <Text style={styles.text}>45%</Text>
                <Text style={{fontSize: 20}}>Your pick</Text>
              </View>
              <View style={styles.outfit}>
                <Image
                style={styles.image}
                source={{url: 'https://s-media-cache-ak0.pinimg.com/736x/37/f3/c8/37f3c8e9620f07a7383b7363248abf7b--brad-pitt--brad-pitt-news.jpg'}}
                />
                <Text style={styles.text}>55%</Text>
              </View>  
              </View>
              </TouchableOpacity>
              <View style={styles.card}> 
                  <View style={styles.outfit}>
                    <Image
                    style={styles.image}
                    source={{url: 'http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/arx5z1k5yvtauzsk6pna.jpg'}}
                    />
                    <Text style={styles.text}>73%</Text>
                  </View>
                  <View style={styles.outfit}>
                    <Image
                    style={styles.image}
                    source={{url: 'https://s-media-cache-ak0.pinimg.com/736x/f6/ec/44/f6ec44d56a98ea927d5d4ead5cfcf40a--espn-the-magazine-magazine-photos.jpg'}}
                    />
                    <Text style={styles.text}>27%</Text>
                  </View>
              </View>
            </ScrollView>  
          </View>
         </View>
        </Modal>



        <TouchableHighlight
        style={styles.stylePoints}
        onPress={() => {
          this.setModalVisible();
        }}>
          <Text>Style Points: (style points)</Text>
        </TouchableHighlight>

      </View>
    )
  }
}


const styles = {
container: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center'
  }, 
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 300, 
    height: 230, 
    backgroundColor: 'white', 
    borderStyle: 'solid',
    borderColor: '#51a2ff',
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 2, 
    marginBottom: 2, 
    paddingTop: 12, 
    paddingLeft: 7, 
    paddingRight: 7, 
    backgroundColor: 'rgba(208, 22, 22, 0.25)'
    // green: rgba(82, 255, 87, 0.42)
    // rgba(22, 208, 81, 0.25)
    // 
  }, 
  outfit: {
    display: 'flex',
    alignItems: 'center', 
    marginLeft: 5, 
    marginRight: 5
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

export default StylePoints;