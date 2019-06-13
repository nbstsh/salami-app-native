import { useState } from 'react';
import { ROUTE } from '../constants';

const useRoute = () => {
	const [currentRoute, setCurrentRoute] = useState(ROUTE.INITIAL);

	const exists = route => {
		return Object.values(ROUTE).includes(route);
	};

	const navigate = route => {
		if (exists(route)) {
			setCurrentRoute(route);
		}
	};

	return {
		currentRoute,
		setCurrentRoute,
		navigate
	};
};

export default useRoute;
