import Paletero from '../productos.json';


export const getAllProducts = () => {
    const prom = new Promise ((resolve)=> {
        setTimeout(() => {
            return resolve(Paletero);
        }, 2000)
    })
    return prom
};

export const getProductsByCategory = (categoryId) => {
    const prom = new Promise ((resolve)=> {
        const results = Paletero.filter((items) => items.category === categoryId);
            setTimeout(() => {
                return resolve(results);
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