import React from 'react';
import { Image } from 'react-native';

const Loader = () => {
	return (
		<Image
			source={require('../../assets/images/loader.gif')}
			style={{ width: 20, height: 20, padding: 5 }}
		/>
	);
};

export default Loader;
