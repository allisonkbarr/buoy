
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import UserMarker from '../components/UserMarker';

const MapViewScreen = ({ userCoords }) => (
	<MapView
		style={styles.map}
		region={{
			latitude: userCoords.latitude,
			longitude: userCoords.longitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		}}
	>
		<UserMarker coordinate={userCoords} />
	</MapView>
);

const styles = StyleSheet.create({
    map: {
			...StyleSheet.absoluteFillObject
    }
});

export default MapViewScreen;
