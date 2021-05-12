import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5p0iOPM-CvRynejmLg1acDKW1mmJPxQ0",
  authDomain: "linkedin-clone-593c1.firebaseapp.com",
  projectId: "linkedin-clone-593c1",
  storageBucket: "linkedin-clone-593c1.appspot.com",
  messagingSenderId: "946507418387",
  appId: "1:946507418387:web:7491220b30a9c20e20e8e6",
  measurementId: "G-MX9N8H4PFQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
