import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmiOdRn6t2G3wj2Fz538TTiX6BSM5wvqA",
  authDomain: "easy-vietnamese.firebaseapp.com",
  projectId: "easy-vietnamese",
  storageBucket: "easy-vietnamese.appspot.com",
  messagingSenderId: "268066571744",
  appId: "1:268066571744:web:91113bc0a6ae227710d785",
  measurementId: "G-N6N3S8KJWW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
