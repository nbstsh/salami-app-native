import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ICON_BUTTON_SIZE } from '../../constants';

const IconButtonBase = ({ onPress, imageSource }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				width: ICON_BUTTON_SIZE,
				height: ICON_BUTTON_SIZE,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 50,
				borderWidth: 1
			}}
		>
			<Image
				source={imageSource}
				style={{
					width: ICON_BUTTON_SIZE * 0.5,
					height: ICON_BUTTON_SIZE * 0.5
				}}
			/>
		</TouchableOpacity>
	);
};

export default IconButtonBase;
