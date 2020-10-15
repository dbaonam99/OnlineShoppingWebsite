import React, { useState } from 'react'

export const CartContext = React.createContext();

export function CartProvider(props) {
    
    const [cartItems, setCartItems] = useState([]);
    const [clickedCart, setClickedCart] = useState(0);

    const addToCart = (product) => {
        setClickedCart(clickedCart + 1);
        setCartItems(cartItems.concat(product))
    }; 

    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                addToCart: addToCart,
                clickedCart: clickedCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}