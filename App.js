import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import InitView from './src/modules/initialView';
import rootReducer from './src/reducers/index';

const store = createStore(rootReducer);

const ROUTES = {
  initView: InitView
}

export default class App extends React.Component {

  renderScene(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  render() {
    console.log(InitView);
    console.log(store);
    return (
      <Provider store={store}>
         {/* <Navigator
          initialRoute={{name: 'initView'}}
          renderScene={this.renderScene}
          configureScene={() => Navigator.SceneConfigs.FloatFromRight}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
            />}
        />  */}
        <InitView />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => ( index === 0 ? null :
    <TouchableOpacity
      activeOpacity={.2}
      style={styles.backButtonContainer}
      onPress={() => navigator.pop() }>
      <Text>
        {icons.leftArrow}
      </Text>
    </TouchableOpacity>
  ),
  RightButton: (route, navigator, index, navState) => (
      <Text></Text>
  ),
  Title: (route, navigator, index, navState) => (
    <Text></Text>
  )

}