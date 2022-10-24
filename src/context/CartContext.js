import { createContext, useContext } from 'react';
import Swal from 'sweetalert2';
import { useLocalStorage } from '../utils/localStorage';



const CartContext = createContext([])

export default CartContext;

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {

    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useLocalStorage('cart', []);


    const isInCart = (id) => cart.some((item) => item.id === id);


    const addItem = (product, quantity) => {
        if (!isInCart(product.id)) {
            const item = {
                ...product,
                quantity
            };
            setCart([...cart, item]);
            Swal.fire ({
                title: `Item agregado!`,
                icon: `success`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            // Actualizar cantidad
            // Buscamos el item dentro del carrito obteniendo su index
            const itemIndex = cart.findIndex(((item) => item.id === product.id));
            // Se crea un borrador del item obtenido para modificarlo y evitar la modificación en el estado de React
            const itemDraft = { ...cart[itemIndex] };
            // Actualizamos "quantity" en el borrador
            itemDraft.quantity = itemDraft.quantity + quantity;
            // Se crea un borrador del carrito para actualizar el item con la nueva cantidad
            const cartDraft = [...cart];
            // Actualizamos el carrito borrador SIN TOCAR EL ESTADO DE REACT.
            cartDraft[itemIndex] = itemDraft;
            // Se modifica el cart origial con el estado de React para incluír la cant nueva
            setCart(cartDraft);
            return Swal.fire ({
                        title: `Item ya está en carrito!`,
                        text: `Actualizamos la cantidad de este item en tu carrito`,                        
                        icon: `warning`,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 1500
                });

            // version corta y mas sensilla
            // const item = cart.find((item) => item.id === product.id);
            // item.quantity = item.quantity + quantity;
            // setCart([...cart]);
            // console.log(cart);
            // return Swal.fire ({
            //         title: `Item ya está en carrito!`,
            //         text: `Actualizamos la cantidad de este item en tu carrito`,
            //         icon: `warning`,
            //         showConfirmButton: false,
            //         timer: 1500
            //     });
        }
    }
    
    const removeItem = (id) => {
        const removerItem = cart.filter((item) => item.id !== id);
        return setCart(removerItem);
    }
    
    const clear = () => {
        setCart([]);
    }
    
    const total = cart.reduce((accumulador, item) => accumulador + (item.price* item.quantity), 0);

    const totalCant = cart.reduce((accumulador, item) => accumulador + item.quantity, 0);
    

    // Opción sin .reduce()
    // let total = 0;
    // cart.forEach((item) => {
    //     total += item.price* item.quantity
    // });

        
    const toUse = {
        isInCart,
        addItem,
        removeItem,
        clear,
        total,
        totalCant,
        cart
    }

    return (
        <CartContext.Provider value={( toUse )} >
            {children}
        </CartContext.Provider>
    )
}