// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF7BR2LcLpC1GC7Q_u0DB6JBQ1EHGJkjc",
  authDomain: "chat-d83d1.firebaseapp.com",
  projectId: "chat-d83d1",
  storageBucket: "chat-d83d1.appspot.com",
  messagingSenderId: "1029800291016",
  appId: "1:1029800291016:web:a1167a16ac976a4f7213fd",
  measurementId: "G-VEFXPLYLV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)

export const db= getFirestore(app)
//CollectionID=messages
// DocumentID=sLw53Qu2gDiuLISZELbZ