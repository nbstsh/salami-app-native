import React, { useContext, useEffect } from 'react';
import Layout from './Layout';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ROUTE } from '../constants';
import AppContext from '../contexts/AppContext';
import CancelButton from './common/CancelButton';
import ConfirmButton from './common/ConfirmButton';
import Loader from './common/Loader';

const SnapScreen = () => {
	const { takenPhoto, navigate, uploadTakenPhoto, isUploading } = useContext(
		AppContext
	);

	// if there is no takenPhoto data, move back to camera screen
	useEffect(() => {
		if (takenPhoto) return;
		console.error('No takenPhoto data exits!');
		navigate(ROUTE.CAMERA);
	}, []);

	// send photo to firebase and check if it's salami
	const onConfirmClick = async () => {
		try {
			await uploadTakenPhoto();
			// move to result page
			navigate(ROUTE.RESULT);
		} catch (e) {
			//TODO: show error message
			console.error(e);
		}
	};

	return (
		<Layout>
			<View style={styles.imageBox}>
				<Image style={styles.image} source={{ uri: takenPhoto.uri }} />
			</View>
			{!isUploading ? (
				<View style={styles.buttonBox}>
					<CancelButton onPress={() => navigate(ROUTE.CAMERA)} />
					<ConfirmButton onPress={onConfirmClick} />
				</View>
			) : (
				<View style={styles.loaderBox}>
					<Loader />
					<Text style={styles.loadingText}>Checking ...</Text>
				</View>
			)}
		</Layout>
	);
};

const styles = StyleSheet.create({
	imageBox: {
		backgroundColor: '#F9F9F9',
		height: '75%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	buttonBox: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingRight: '15%',
		paddingLeft: '15%'
	},
	loaderBox: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loadingText: {
		marginTop: 5
	}
});

export default SnapScreen;
