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
		height: '15%',
		justifyContent: 'center'
	},
	logo: {
		padding: 20,
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default Header;
