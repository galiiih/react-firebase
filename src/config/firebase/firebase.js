import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firebase-analytics'
import 'firebase/firebase-auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDNjSo6LgP5p3O_On5Eu7gTEEYjvZUw1R0",
  authDomain: "react-firebase-260a9.firebaseapp.com",
  databaseURL: "https://react-firebase-260a9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-firebase-260a9",
  storageBucket: "react-firebase-260a9.appspot.com",
  messagingSenderId: "669677402021",
  appId: "1:669677402021:web:562fb86831efda5597da4c"
};

// if(location.hostname === 'localhost'){
//   firebaseConfig = {
//     databaseURL: 'http://localhost:9000/ns=react-firebase-260a9'
//   }
// }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const database = firebase.database();

  export default firebase;