import React, { useContext } from 'react';
import Layout from './Layout';
import { Text, Button } from 'react-native';
import { ROUTE } from '../constants';
import AppContext from '../contexts/AppContext';

const Home = () => {
	const { navigate } = useContext(AppContext);
	return (
		<Layout>
			<Text>Home</Text>
			<Button
				title='START'
				onPress={() => {
					navigate(ROUTE.CAMERA);
				}}
			/>
		</Layout>
	);
};

export default Home;
