import React from 'react';

import { ROUTE } from './constants';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import SnapScreen from './components/SnapScreen';
import ResultScreen from './components/ResultScreen';

import AppContext from './contexts/AppContext';
import useRoute from './hooks/useRoute';
import useTakenPhoto from './hooks/useTakenPhoto';

const routes = {
	[ROUTE.HOME]: <HomeScreen />,
	[ROUTE.CAMERA]: <CameraScreen />,
	[ROUTE.SNAP]: <SnapScreen />,
	[ROUTE.RESULT]: <ResultScreen />
};

export default function App() {
	const AppContextValue = {
		...useRoute(),
		...useTakenPhoto()
	};

	return (
		<AppContext.Provider value={AppContextValue}>
			{routes[AppContextValue.currentRoute]}
		</AppContext.Provider>
	);
}
