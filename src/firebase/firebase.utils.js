import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCOOuqT3gs3px_7J62WavjzysZMq1JLUuU",
    authDomain: "crwn-db-a6d66.firebaseapp.com",
    projectId: "crwn-db-a6d66",
    storageBucket: "crwn-db-a6d66.appspot.com",
    messagingSenderId: "734447020727",
    appId: "1:734447020727:web:2074073ce3299723853b32"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;