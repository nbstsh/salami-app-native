import React, { useContext, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import Layout from './Layout';
import AppContext from '../contexts/AppContext';
import { MAIN_BOX_HEIGHT, ROUTE } from '../constants';
import NavigationButton from './common/NavigationButton';

const ResultScreen = () => {
	const { takenPhoto, result, navigate } = useContext(AppContext);

	// if there is not taken photo data or result, move back to Home screen
	useEffect(() => {
		if (takenPhoto && result) return;
		//TODO: show error message
		console.error('TakenPhoto or result does not exist!');
		navigate(ROUTE.HOME);
	}, []);

	return (
		<Layout>
			<View style={styles.imageBox}>
				<ImageBackground
					source={{ uri: takenPhoto.uri }}
					style={styles.bgImage}
				>
					<Text style={styles.resultText}>{result}</Text>
				</ImageBackground>
			</View>
			<View style={styles.buttonBox}>
				<NavigationButton text='Try Again?' to={ROUTE.CAMERA} />
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	imageBox: {
		backgroundColor: '#F9F9F9',
		height: MAIN_BOX_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	resultText: {
		fontSize: 70,
		color: '#fff',
		textAlign: 'center'
	},
	buttonBox: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default ResultScreen;
