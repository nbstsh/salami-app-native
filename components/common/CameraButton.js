import React from 'react';
import IconButtonBase from './IconButtonBase';

const CameraButton = ({ onPress }) => {
	return (
		<IconButtonBase
			onPress={onPress}
			imageSource={require('../../assets/images/camera-icon.png')}
		/>
	);
};

export default CameraButton;
