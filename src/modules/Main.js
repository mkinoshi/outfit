import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, AsyncStorage, Dimensions, AppRegistry } from 'react-native';
import {getUserThunk} from '../thunks/getUserThunk';
import Header from './Header.js';
const {height, width} = Dimensions.get('window');
import VoterMain from './Voter/Voter_index';
import PosterMain from './Poster/Poster_index';
import VoterResultsMain from './VoterResults/VoterResults_index';
import PosterResultsMain from './PosterResults/PosterResults_index';
import NewModal from './Modal.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'voter'
    }
  }
  // static navigationOptions = {
  //   title: 'Voter',
  // };

  componentDidMount() {
    //access to userId
    //this.props.getOrCreate(this.props.facebookId, this.props.name)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.facebookId) {
      nextProps.getOrCreate(nextProps.facebookId, nextProps.name)
    }
  }

  onLogoClick() {
    if (this.state.page === 'voter') {
      this.setState({page: 'poster'});
    } else {
      this.setState({page: 'voter'});
    }
  }

  handleBack() {
    if (this.state.page === 'voterResults') {
      this.setState({page: 'voter'});
    } else {
      this.setState({page: 'poster'});
    }
  }

  historyToggle() {
    if (this.state.page === 'voter') {
      this.setState({page: 'voterResults'});
    } else {
      this.setState({page: 'voter'});
    }
  }

  myCardsToggle() {
    if (this.state.page === 'posterResults') {
      this.setState({page: 'poster'});
    } else {
      this.setState({page: 'posterResults'})
    }
  }

  render() {
    return (
      <View >
        <Header style={{top: '0'}} 
        onLogoClick={() => this.onLogoClick()}
        page={this.state.page}
        handleBack={() => this.handleBack()}
        />
        {this.state.page === 'voter' ?
          <VoterMain style={{top: '80'}} navigate={() => this.historyToggle()}/>
            :
          null
        }
        {this.state.page === 'poster' ?
          <PosterMain navigate={() => this.myCardsToggle()}/>
            :
          null
        }
        {this.state.page === 'voterResults' ?
          <VoterResultsMain navigation={() => this.historyToggle()}/>
            :
          null
        }
        {this.state.page === 'posterResults' ?
          <PosterResultsMain />
            :
          null
        }
        {this.props.isOpen ? <NewModal /> :null}
      </View>
    )
  }
}

const styles = {
  outer: {
    flex: 1,
    flexDirection: 'column',
    width: width
  }
}


const mapStateToProps = (state) => ({
  facebookId: state.userReducer.facebookId,
  name: state.userReducer.name,
  isOpen: state.modalReducer.isModalOpen
});

const mapDispatchToProps = (dispatch) => ({
  getOrCreate: (userId, name) => getUserThunk(userId, name)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);