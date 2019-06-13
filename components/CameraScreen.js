import React, { useRef, useContext, useEffect } from 'react';
import Layout from './Layout';
import { View, Button, StyleSheet } from 'react-native';
import useCustomCamera from '../hooks/useCustomCamera';
import { Camera } from 'expo-camera';
import AppContext from '../contexts/AppContext';
import { ROUTE } from '../constants';
import CameraButton from './common/CameraButton';

const CameraScreen = () => {
	const cameraRef = useRef(null);
	const { setTakenPhoto, resetTakenPhoto, navigate } = useContext(AppContext);
	const { hasCameraPermission, cameraType } = useCustomCamera();

	// every time user visit camera screen clean existing photo data
	useEffect(() => {
		resetTakenPhoto();
	}, []);

	const takePictureAsync = async () => {
		const photo = await cameraRef.current.takePictureAsync();
		// set taken photo to top level context
		setTakenPhoto(photo);
		// navigate to cofirmation screen
		navigate(ROUTE.SNAP);
	};

	return (
		<Layout>
			<View style={styles.cameraBox}>
				{hasCameraPermission && (
					<Camera
						ref={cameraRef}
						style={styles.camera}
						type={cameraType}
					/>
				)}
			</View>
			<View style={styles.buttonBox}>
				<CameraButton onPress={() => takePictureAsync()} />
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	cameraBox: {
		backgroundColor: '#F9F9F9',
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
