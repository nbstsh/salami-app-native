import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppContext from '../contexts/AppContext';
import { ROUTE } from '../constants';

const Header = () => {
	const { navigate } = useContext(AppContext);
	return (
		<View style={styles.header}>
			<Text style={styles.logo} onPress={() => navigate(ROUTE.HOME)}>
				Logo
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		padding: 20
	},
	logo: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default Header;
