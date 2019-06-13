import React from 'react';
import Layout from './Layout';
import { View, Text, StyleSheet } from 'react-native';
import { ROUTE } from '../constants';
import NavigationButton from './common/NavigationButton';

const Home = () => {
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
		height: '75%',
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

export default Home;
