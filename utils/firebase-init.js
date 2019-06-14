import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyDY3qVvJonNZEH3unXibeeVsufeM1N8RKE',
	authDomain: 'salami-app.firebaseapp.com',
	databaseURL: 'https://salami-app.firebaseio.com',
	projectId: 'salami-app',
	storageBucket: 'salami-app.appspot.com',
	messagingSenderId: '1019769502772',
	appId: '1:1019769502772:web:727f1592e3553840'
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
