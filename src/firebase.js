
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCYxbfd5ER26mWN4-sVN441lh3e_2q0Y0A",
  authDomain: "expense-tracker-dev-8bf80.firebaseapp.com",
  databaseURL: "https://expense-tracker-dev-8bf80-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-dev-8bf80",
  storageBucket: "expense-tracker-dev-8bf80.appspot.com",
  messagingSenderId: "601558776626",
  appId: "1:601558776626:web:5711a615d119c8d94bf52b"
})

export const provider = new firebase.auth.GoogleAuthProvider()
export default app
