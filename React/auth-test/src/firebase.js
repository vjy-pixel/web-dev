import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import firebase from 'firebase'
// require('firebase/auth')

const app = firebase.initializeApp({
    apiKey: "AIzaSyCx9LiPRGoBDExr2A3btb9DCLZBMLEKvUI",
    authDomain: "stack-quess-react.firebaseapp.com",
    projectId: "stack-quess-react",
    storageBucket: "stack-quess-react.appspot.com",
    messagingSenderId: "1047381104340",
    appId: "1:1047381104340:web:537766523ecc06e2fdcd41"
});
export const auth = app.auth();
export default app