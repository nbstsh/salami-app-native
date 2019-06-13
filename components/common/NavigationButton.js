import React, { useContext } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import AppContext from '../../contexts/AppContext';

const NavigationButton = ({ text, to, buttonStyle, textStyle }) => {
	const { navigate } = useContext(AppContext);
	const defaultStyle = {
		button: {
			backgroundColor: '#fff',
			borderWidth: 1,
			width: '70%',
			padding: 20,
			justifyContent: 'center',
			alignItems: 'center'
		},
		text: {
			color: '#000'
		}
	};
	return (
		<TouchableHighlight
			style={buttonStyle || defaultStyle.button}
			onPress={() => {
				navigate(to);
			}}
		>
			<Text style={textStyle || defaultStyle.text}>{text}</Text>
		</TouchableHighlight>
	);
};

export default NavigationButton;
