import firebase from "firebase/app";
import "firebase/firestore";
import '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqbs7wyHycve2ZzyXwzKge1k08E9ko58o",
    authDomain: "chat-app-af3e5.firebaseapp.com",
    projectId: "chat-app-af3e5",
    storageBucket: "chat-app-af3e5.appspot.com",
    messagingSenderId: "1050229457389",
    appId: "1:1050229457389:web:8ab3f603e07f5713c467e4"
};

const db = firebase.initializeApp(firebaseConfig);

export { db };