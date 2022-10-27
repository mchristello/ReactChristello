import { createContext } from "react";
import { useLocalStorage } from '../utils/localStorage';
import { getUser, setUser } from "../utils/Firebase/firestore";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from 'sweetalert2';


export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

const [userState, setUserState] = useLocalStorage("userLogged", null);


// Registro de nuevo usuario
    const registerUser = async (data) => {
        const auth = getAuth();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            const user = res.user;
            setUser({
                ...data,
                uid: user.uid,
            });
            setUserState(data);
        } catch (error) {
            console.log(error)
            Swal.fire ({
                title: `Ups!!`,
                text: `Revisá los datos ingresados`,
                icon: `error`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };


// Inicio de sesión
const signIn = async ({ email, password }) => {
    const auth = getAuth();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        const resolve = await getUser(email)
        setUserState(resolve.docs[0].data());
    } catch (error) {
        console.log(error)
        Swal.fire ({
            title: `Ups!!`,
            text: `Revisá los datos ingresados`,
            icon: `error`,
            showConfirmButton: false,
            timer: 1500
        });
    }
};

// Authentication con Google Authent
const LoginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();    
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // Datos del usuario logueado
        const user = result.user;
        // Accedo solo a los datos del usuario que me interesan
        const datosUser = { 
            name: user.displayName,
            email: user.email
        }
        // Le paso los datos al userState para por realizar compras
        setUserState(datosUser)
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

// Cierre de sesión
const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    setUserState(null);
    });
};

const utils = {
    userState,
    registerUser,
    signIn,
    LoginWithGoogle,
    logOut,
};

    return (
        <UserContext.Provider value={utils}>
            {children}
        </UserContext.Provider>
    );
};