
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MapViewScreen from './screens/MapViewScreen';
import AddBuoyScreen from './screens/AddBuoyScreen';

const AppNavigator = createStackNavigator({
  Map: MapViewScreen,
  Add: AddBuoyScreen
}, {
  initialRouteName: 'Map'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
