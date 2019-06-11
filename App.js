import React from 'react';
import useRoute from './hooks/useRoute';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import { ROUTE } from './constants';
import AppContext from './contexts/AppContext';

const routes = {
	[ROUTE.HOME]: <HomeScreen />,
	[ROUTE.CAMERA]: <CameraScreen />
};

export default function App() {
	const AppContextValue = {
		...useRoute()
	};

	return (
		<AppContext.Provider value={AppContextValue}>
			{routes[AppContextValue.currentRoute]}
		</AppContext.Provider>
	);
}
