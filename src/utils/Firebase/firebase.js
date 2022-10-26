import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

//firestore config
export const firebaseConfig = {
    apiKey: "AIzaSyAmeubi7Vz5GxvvSHOwwvG8KTrP3pb3nDo",
    authDomain: "padel-market-2259b.firebaseapp.com",
    projectId: "padel-market-2259b",
    storageBucket: "padel-market-2259b.appspot.com",
    messagingSenderId: "32565474615",
    appId: "1:32565474615:web:d9e5ea803d398b071056b2"
};

const app = initializeApp(firebaseConfig);

export const authTokken = getAuth(app);



export const LoginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();    
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}