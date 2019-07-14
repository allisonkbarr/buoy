
import React from 'react';
import { StyleSheet } from 'react-native';
import { H1 } from 'native-base';

const Logo = () => (
  <H1 style={styles.logo}>Buoy</H1>
);

const styles = StyleSheet.create({
	logo: {
		position: 'absolute',
		top: 40,
		margin: 10,
		zIndex: 100
	}
});

export default Logo;
