import { getFirestore, getDocs, collection, query, where, getDoc, doc, addDoc, serverTimestamp } from "firebase/firestore";

    // Funcion para crear las ordenes
    export const setOrder = async (buyer, cart, total) => {
        const db = getFirestore();
        let order = {
        buyer: {
            name: buyer.name,
            email: buyer.email,
            phone: buyer.phone,
        },
        total: total(),
        date: serverTimestamp(),
        items: [...cart],
        };
        const resolve = await addDoc(collection(db, "orders"), order);
        return resolve.id;
    };
    
    // funcion para guardar los usuarios en firebase
    export const setUser = async (data) => {
        const db = getFirestore();
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            phoneNumber: data.phone,
            adress: data.adress,
            uid: data.uid,
        };
        await addDoc(collection(db, "users"), user);
    };
    
    // Funcion que trae mis ordenes de firestore
    export const getAllOrders = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        return getDocs(orderCollection);
    };
    
    // Funcion para traer los datos del usuario
    export const getUser = (email) => {
        const db = getFirestore();
        const userData = query(collection(db, "users"), where("email", "==", email));
        return getDocs(userData);
    };