import { useState } from 'react';

const useImage = () => {
	const [image, setImage] = useState(null);

	const resetImage = () => {
		setImage(null);
	};

	return {
		image,
		setImage,
		resetImage
	};
};

export default useImage;
