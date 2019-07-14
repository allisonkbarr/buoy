
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const AddBuoyScreen = () => (
	<SafeAreaView style={styles.container}>
		<Text>Drop a buoy</Text>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default AddBuoyScreen;
