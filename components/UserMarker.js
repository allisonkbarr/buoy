
import React from 'react';
import { Text } from 'react-native';
import { Callout, Marker } from 'react-native-maps';

const UserMarker = ({ coordinate }) => (
	<Marker coordinate={coordinate} pinColor="blue">
		<Callout>
			<Text>Me!</Text>
		</Callout>
	</Marker>
);

export default UserMarker;
