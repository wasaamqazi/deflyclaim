// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIGC7u0TaI43vpUYq1-fuQRazR5qaqLqA",
    authDomain: "defly-2949e.firebaseapp.com",
    projectId: "defly-2949e",
    storageBucket: "defly-2949e.appspot.com",
    messagingSenderId: "744759494991",
    appId: "1:744759494991:web:04d10480ce17d4327add3a"
};

// export Firebase so it can be used elsewhere 
const FireBase = firebase.initializeApp(firebaseConfig);
export default FireBase;