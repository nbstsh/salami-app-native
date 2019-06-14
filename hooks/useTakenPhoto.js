import { useState } from 'react';

const useTakenPhoto = () => {
	const [takenPhoto, setTakenPhoto] = useState(null);
	const [isUploading, setIsUploading] = useState(false);
	const [result, setResult] = useState(null);

	const resetTakenPhoto = () => {
		setTakenPhoto(null);
	};

	const uploadTakenPhoto = async () => {
		if (!takenPhoto) return console.error('No taken photo exists!');

		setIsUploading(true);

		try {
			// upload taken photo to firebase
			// TODO: replace dummy
			//uploadPhotoToFirebase();

			// send request to image recognition api
			// TODO: replace dummy
			const result = 'Is A Salami!';

			setIsUploading(false);
			setResult(result);
			return result;
		} catch (e) {
			setIsUploading(false);
			throw e;
		}
	};

	return {
		takenPhoto,
		setTakenPhoto,
		resetTakenPhoto,
		uploadTakenPhoto,
		isUploading,
		result
	};
};

export default useTakenPhoto;
