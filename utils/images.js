import { storage } from './firebase-init';

const getImagesRef = () => {
	return storage.ref().child('images');
};

const getImageRef = fileName => {
	const imagesRef = getImagesRef();
	return imagesRef.child(fileName);
};

const generateFileName = () => {
	return new Date().toISOString();
};

const generateMetadata = () => {
	return {
		cacheControl: 'max-age=31536000'
	};
};

export const uploadImage = async imageBlob => {
	if (!imageBlob) throw new Error('Image blob needs to be provided.');

	const fileName = generateFileName();
	const metadata = generateMetadata();
	const ref = getImageRef(fileName);
	await ref.put(imageBlob, metadata);
};
