import { useState, useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

// default camera type is back
const useCustomCamera = (defaultCameraType = Camera.Constants.Type.back) => {
	const [hasCameraPermission, setCameraPermission] = useState(false);
	const [cameraType, setCameraType] = useState(defaultCameraType);

	// TODO: show error message when permission is not granted.
	const launchCustomCameraAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		if (status !== 'granted') {
			console.error('Camera Permission not granted!!!');
			return;
		}

		setCameraPermission(true);
	};

	// ask permission at the first time rendering
	useEffect(() => {
		launchCustomCameraAsync();
	}, []);

	const changeCameraType = () => {
		const newCameraType =
			cameraType === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back;
		setCameraType(newCameraType);
	};

	const setBackCamera = () => {
		setCameraType(Camera.Constants.Type.back);
	};

	const setFrontCamera = () => {
		setCameraType(Camera.Constants.Type.front);
	};

	return {
		hasCameraPermission,
		cameraType,
		changeCameraType,
		setBackCamera,
		setFrontCamera
	};
};

export default useCustomCamera;
