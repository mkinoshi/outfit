import React, { Component } from 'react';
import { Text, View, StyleSheet,  Image } from 'react-native';
import { Constants } from 'expo';

class PosterMain extends Component {
  // static navigationOptions = {
  //   title: 'Poster',
  // };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}> 
         <View style={styles.outfit}>
          <Image
          style={styles.image}
          source={{url: 'http://images.askmen.com/fashion/style_icon/33_style-icon-brad-pitt.jpg'}}
          />
          <Text style={styles.text}>45%</Text>
        </View>
        <View style={styles.outfit}>
          <Image
          style={styles.image}
          source={{url: 'https://s-media-cache-ak0.pinimg.com/736x/37/f3/c8/37f3c8e9620f07a7383b7363248abf7b--brad-pitt--brad-pitt-news.jpg'}}
          />
          <Text style={styles.text}>55%</Text>
        </View>  
        </View>
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
    alignItems: 'center'
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

export default PosterMain;