import { storage } from './firebase-init';
import { DEFAULT_FILE_TYPE } from '../constants';

const getImagesRef = () => {
	return storage.ref().child('images');
};

const getImageRef = fileName => {
	const imagesRef = getImagesRef();
	return imagesRef.child(fileName);
};

const generateFileName = () => {
	return `${new Date().getTime()}.${DEFAULT_FILE_TYPE.EXTENSION}`;
};

const generateMetadata = () => {
	return {
		cacheControl: 'max-age=31536000'
	};
};

// upload image blob data to firebase storage
export const uploadImage = async imageBlob => {
	if (!imageBlob) throw new Error('Image blob needs to be provided.');

	const fileName = generateFileName();
	const metadata = generateMetadata();
	const ref = getImageRef(fileName);
	await ref.put(imageBlob, metadata);
};
