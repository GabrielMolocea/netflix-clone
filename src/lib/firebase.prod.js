import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAj5P8xurnK79ro7WkMQsadNIpyH3owTbo',
  authDomain: 'netflix-fa758.firebaseapp.com',
  projectId: 'netflix-fa758',
  storageBucket: 'netflix-fa758.appspot.com',
  messagingSenderId: '912341537993',
  appId: '1:912341537993:web:e991a5f319f4e7fb59a918',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
