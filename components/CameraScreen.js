import React, { useRef, useContext } from 'react';
import Layout from './Layout';
import { View, Button, Image, StyleSheet } from 'react-native';
import useCustomCamera from '../hooks/useCustomCamera';
import { Camera } from 'expo-camera';
import AppContext from '../contexts/AppContext';
import { ROUTE } from '../constants';

const CameraScreen = () => {
	const { setImage, navigate } = useContext(AppContext);
	const cameraRef = useRef(null);
	const { hasCameraPermission, cameraType } = useCustomCamera();
	console.log({ hasCameraPermission, cameraType });

	const takePictureAsync = async () => {
		const image = await cameraRef.current.takePictureAsync();

		console.log({ image });
		// set taken photo to top level context
		setImage(image);
		// navigate to cofirmatin screen
		// navigate(ROUTE.HOME);
	};

	return (
		<Layout>
			<View style={styles.main}>
				{hasCameraPermission && (
					<Camera
						ref={cameraRef}
						style={styles.camera}
						type={cameraType}
					/>
				)}
			</View>
			<View style={styles.buttonBox}>
				<Button title='CAPTURE' onPress={() => takePictureAsync()} />
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	main: {
		height: '75%'
	},
	camera: {
		width: '100%',
		height: '100%'
	},
	buttonBox: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default CameraScreen;
