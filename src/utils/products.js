import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const getAllProducts = async () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    try {
        const snapshot = await getDocs(collectionReference);
        const list = snapshot
            .docs
            .map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        return list;
    } catch (err) {
        return console.warn(err);
    }
}

export const getProductsByCategory = (categoryId) => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    const collectionQuery = query(collectionReference, where('category', '==', categoryId ))
    return getDocs(collectionQuery)
        .then(snapshot => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
            return list;
        })
        .catch((err) => console.log(err));
};

export const getProduct = (id)=> {
    const database = getFirestore();
    const itemReference = doc(database, 'items', id);
    return getDoc(itemReference)
        .then(snapshot => {
            if(snapshot) {
                const item = {
                    id: snapshot.id,
                    ...snapshot.data()
                };
            return item;
            };
        })
        .catch((err) => console.warn(err));
}