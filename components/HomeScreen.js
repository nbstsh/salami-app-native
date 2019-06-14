import React from 'react';
import Layout from './Layout';
import { View, Text, StyleSheet } from 'react-native';
import { ROUTE, MAIN_BOX_HEIGHT } from '../constants';
import NavigationButton from './common/NavigationButton';

const HomeScreen = () => {
	return (
		<Layout>
			<View style={styles.messageBox}>
				<Text style={styles.message}>Hello</Text>
				<Text style={styles.message}>Sample Message</Text>
				<Text style={styles.message}>Sample Message</Text>
			</View>
			<View style={styles.buttonBox}>
				<NavigationButton text='START' to={ROUTE.CAMERA} />
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	messageBox: {
		backgroundColor: '#F9F9F9',
		height: MAIN_BOX_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center'
	},
	message: {
		fontSize: 30,
		padding: 10
	},
	buttonBox: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default HomeScreen;
