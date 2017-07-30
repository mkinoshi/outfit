import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  Modal,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, FormLabel, FormInput} from 'react-native-elements';
import {Button} from 'native-base';
import _ from 'underscore';
import { connect } from 'react-redux';

class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#c5c7c8",
      view: 0,
      content: null,
      rate: null
    }
  }

  handleClick(i) {
    this.setState({color: color_enum[i]});
    this.setState({rate: i});
  }

  handleNextClick() {
    this.setState({view: 1})
  }

  handleDoneClick() {
    this.props.closeModal(this.props.id, this.state.rate, this.state.content);
  }

  render() {
    return (
      <TouchableOpacity style={styles.outer} onPress={() => this.handleDoneClick()}>
        <View style={styles.card}>
           {this.state.view === 0 ?
             (
               <View>
                  <Text style={{width: 225, marginLeft: 45, paddingTop: 50, fontFamily: 'Arial', fontSize: 15}}>Take or choose the first picture</Text>
                  <Button
                   title='NEXT'
                   small
                   backgroundColor='#35cc75'
                   onPress={() => this.handleNextClick()}
                   style={{top: 300, width: 120, height: 25, marginLeft: 75}}
                  />
                  <TouchableOpacity  onPress={() => this.handleNextClick()}>
                    <Text style={{top: 336, fontSize: 12, color: '#c5c7c8', marginLeft: 110}}>Skip This Step</Text>
                  </TouchableOpacity>
                </View>
            ) : (
              <View>
                <Text style={{width: 225, marginLeft: 45, paddingTop: 50, fontFamily: 'Arial', fontSize: 20}}>Take or choose the first picture</Text>
                  <Button
                  title='DONE'
                  small
                  backgroundColor='#35cc75'
                  onPress={() => this.handleDoneClick()}
                  style={{top: 300, width: 120, height: 25, marginLeft: 75}}
                  />
                  <TouchableOpacity onPress={() => this.handleDoneClick()}>
                  <Text style={{top: 336, fontSize: 12, color: '#c5c7c8', marginLeft: 110}}>Skip This Step</Text>
                  </TouchableOpacity>
              </View>
            )}
      </View>
    </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // id: state.modal_reducers.articleId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // closeModal: (id, rate, content) => dispatch(closeModal(id, rate, content)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewModal);

const color_enum = ['#0693e3', '#8ed1fc', '#00D084', '#F78DA7', '#EB144C'];

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#cccccc',
    height: height-200,
    width: 300,
    position: 'absolute',
    backgroundColor: '#F8F9FA',
    top: 150,
    left: 40
  },
  slider: {
    marginTop: 30,
    width: width - 100,
    marginLeft: 10
  },
  outer: {
    position: 'absolute',
    height:height,
    width: width,
    backgroundColor: 'rgba(52, 52, 52, 0.6)'
  },
  track: {
    height: 10,
    borderRadius: 1,
  },
  thumb: {
    width: 8,
    height: 20,
    borderRadius: 5,
    top: 25,
    backgroundColor: '#838486',
  }
})
