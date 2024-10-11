import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxNP0DfgBDfVl3SsmrJ082HuiuSnv6XuQ',
  authDomain: 'just-eat-f3142.firebaseapp.com',
  projectId: 'just-eat-f3142',
  storageBucket: 'just-eat-f3142.appspot.com',
  messagingSenderId: '858337443978',
  appId: '1:858337443978:web:f76972d21ddf4eed576d73',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);