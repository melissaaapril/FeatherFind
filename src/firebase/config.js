import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAGPgn75FO4kcUVO4SIhEpHfDlTuhRSCBk",
    authDomain: "featherfinder-database.firebaseapp.com",
    databaseURL: "https://featherfinder-database-default-rtdb.firebaseio.com",
    projectId: "featherfinder-database",
    storageBucket: "featherfinder-database.appspot.com",
    messagingSenderId: "230223965238",
    appId: "1:230223965238:web:faee7db5deaaece1697c97",
    measurementId: "G-QVZYR05Z9W"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const storage = firebase.storage();
    const db = firebase.firestore();
    const auth = firebase.auth();
 
  
    export {storage, db, auth};