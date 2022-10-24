import { createContext } from "react";
import { useLocalStorage } from '../utils/localStorage';
import { getUser, setUser } from "../utils/Firebase/firebase";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
        //enviar a la pagina principal
        } catch (error) {
            console.warn(error);
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
    alert(error);
    }
};

const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    setUserState(null);
    });
};

const data = {
    userState,
    registerUser,
    signIn,
    logOut,
};

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
};