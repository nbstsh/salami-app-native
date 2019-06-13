import React from 'react';
import IconButtonBase from './IconButtonBase';

const ConfirmButton = ({ onPress }) => {
	return (
		<IconButtonBase
			onPress={onPress}
			imageSource={require('../../assets/images/check-icon.png')}
		/>
	);
};

export default ConfirmButton;
