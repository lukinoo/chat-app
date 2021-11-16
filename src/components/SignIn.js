import React from "react";
import firebase from "firebase";

const SignIn = () => {
    const SignInWithFirebase = () => {
        const google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
            .then((re) => {
                console.log(re)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="sign-in-page">
            <h3>🔥 Luka's test Chat App 🥳</h3>
            <button onClick={SignInWithFirebase} className="sign-in">
                Sign In
            </button>
        </div>
    )
}

export default SignIn;