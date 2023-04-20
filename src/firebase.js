import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCn9RAQo0EnCDgSZglI79RvZ0VJG8wPZBA",
  authDomain: "odisha-a56eb.firebaseapp.com",
  projectId: "odisha-a56eb",
  storageBucket: "odisha-a56eb.appspot.com",
  messagingSenderId: "1028398274530",
  appId: "1:1028398274530:web:57b8d5f4b0c3246aa90bbb",
  measurementId: "G-Q9R90FZLF4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
