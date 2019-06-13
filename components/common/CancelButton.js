import React from 'react';
import IconButtonBase from './IconButtonBase';

const CancelButton = ({ onPress }) => {
	return (
		<IconButtonBase
			onPress={onPress}
			imageSource={require('../../assets/images/cancel-icon.png')}
		/>
	);
};

export default CancelButton;
