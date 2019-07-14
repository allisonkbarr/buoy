
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

import AddButton from '../components/AddButton';
import UserMarker from '../components/UserMarker';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userCoords: null,
			locationError: null
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
			content = (
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
			)
		}

		return (
			<SafeAreaView style={styles.container}>
				{content}
				{userCoords && <AddButton handlePress={() => this.props.navigation.navigate('Add')} />}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loading: {
		fontSize: 16
	},
	map: {
		...StyleSheet.absoluteFillObject
	}
});
