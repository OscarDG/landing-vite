import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider ({children}){
    
    const [cart, setCart] = useState(() => {
        try {
            const productsInLocalStorage = localStorage.getItem('cartProducts');
            return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
        } catch (error) {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cart));
        console.log(cart)
    },[cart])

    const addToCart = product => {
        const inCart = cart.find((item) => item.id === product.id);

        if(inCart){
            setCart(
                cart.map((item) => {
                    if(item.id === product.id){
                        return{...inCart, quantity: inCart.quantity + 1}
                    }else return item
                })
            );
        }else{
            setCart([...cart, {...product, quantity: 1}]);
        }
    };

    const removeFromCart = product => {
        const inCart = cart.find(
            (item) => item.id === product.id
        );

        if(inCart.quantity === 1){
            setCart(
                cart.filter(item => item.id !== product.id)
            );
        }else{
            setCart(
                cart.map((item) => {
                    if(item.id === product.id){
                        return{...inCart, quantity: inCart.quantity - 1};
                    }else return item;
                })
            );
        }
    };

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart,
         setCart, 
         addToCart, 
         clearCart,
         removeFromCart
        }}>
        {children}
        </CartContext.Provider>
    )
}