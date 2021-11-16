import firebase from "firebase";

const Header = () => {
    return (
        <header>
            <h2 className="logo">💬🔥</h2>
            <button onClick={() => firebase.auth().signOut()} className="sign-out">Sign Out</button>
        </header>
    )
}

export default Header;