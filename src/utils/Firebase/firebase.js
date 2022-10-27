import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
