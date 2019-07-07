
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapViewScreen from './screens/MapViewScreen';

const SCREENS = {
  Map
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCoords: null,
      locationError: null,
      currentScreen: SCREENS.Map
    }
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          userCoords: position.coords,
          locationError: null
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  
  render() {
    const { userCoords, locationError } = this.state;

    let content = <Text style={styles.loading}>Loading...</Text>;

    if (locationError) {
      content = <Text style={styles.loading}>Error: {locationError}</Text>;
    }

    if (userCoords) {
      content = <MapViewScreen userCoords={userCoords} />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Buoy</Text>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    top: 40,
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    zIndex: 500
  },
  loading: {
    fontSize: 16,
    textAlign: 'center'
  }
});
