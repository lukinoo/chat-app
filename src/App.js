import React, { useState, useEffect } from "react";
import './styles/main.css';
import Header from "./components/Header";
import Section from "./components/Section";
import ChatForm from "./components/ChatForm";
import SignIn from './components/SignIn';
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

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false)
  })

  useEffect(() => {
    firestore.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, text: doc.data().text, uid: doc.data().uid, photoURL: doc.data().photoURL })));
    })
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = firebase.auth().currentUser;

    await firestore.collection('messages').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    })

    setInput("");
  }

  return (
    <div className="App">
      {isUserSignedIn ? (
        <>
          <Header />
          <Section messages={messages} />
          <ChatForm input={input} setInput={setInput} sendMessage={sendMessage} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}


export default App;
