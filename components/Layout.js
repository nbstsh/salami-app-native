import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<View style={styles.layout}>
			<Header />
			<View style={styles.container}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1
	},
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});

export default Layout;
