import React, { forwardRef } from "react";
import firebase from "firebase";

const Message = forwardRef((props, ref) => {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'received';
    return (
        <div ref={ref} className={`message ${messageClass}`}>
            <img src={photoURL} alt="user" />
            <p>{text}</p>
        </div>
    )
})

export default Message;