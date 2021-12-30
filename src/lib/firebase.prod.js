import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAj5P8xurnK79ro7WkMQsadNIpyH3owTbo',
  authDomain: 'netflix-fa758.firebaseapp.com',
  projectId: 'netflix-fa758',
  storageBucket: 'netflix-fa758.appspot.com',
  messagingSenderId: '912341537993',
  appId: '1:912341537993:web:e991a5f319f4e7fb59a918',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
