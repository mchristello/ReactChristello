import Paletero from '../productos.json';


export const getProducts = () => {
    const prom = new Promise ((resolve)=> {
        setTimeout(() => {
            return resolve(Paletero);
        }, 2000)
    })
    return prom
};


export const getProduct = (id)=> {
    const promise = new Promise ((resolve) => {
        const result = Paletero.find((item) => item.id === parseInt(id))
            setTimeout(()=>{
                return resolve(result);
            }, 2000);
    });
    return promise
};




    // const prom = new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(Paletero);
    //     }, 3000);
    // })

    // useEffect (()=> {
    //     prom
    //     .then((res) => setPaletero(res))
    //     .catch((error) => console.log(error))
    //     .finally(() => setLoading(false))
    // }, []);