import { createContext } from "react";
import { useLocalStorage } from '../utils/localStorage';
import { getUser, setUser } from "../utils/Firebase/firestore";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';


export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

const [userState, setUserState] = useLocalStorage("userLogged", null);
console.log(userState);


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
        console.log(email, password);
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
    logOut,
};

    return (
        <UserContext.Provider value={utils}>
            {children}
        </UserContext.Provider>
    );
};