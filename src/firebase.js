import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNoA4TceWO9WnjXEwcLX8PT4EZRVgwcqs",
  authDomain: "fb-clone-d5cf3.firebaseapp.com",
  projectId: "fb-clone-d5cf3",
  storageBucket: "fb-clone-d5cf3.appspot.com",
  messagingSenderId: "475392627532",
  appId: "1:475392627532:web:88cbcd5b3970a794b935e9",
  measurementId: "G-Z5HKWZD5SC"
};


const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
  