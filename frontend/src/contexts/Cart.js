import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext();

export function CartProvider(props) {
    
    const [cartItems, setCartItems] = useState([]);
    const [clickedCart, setClickedCart] = useState(0);

    const addToCart = (product) => {
        setClickedCart(clickedCart + 1) // scroll on click to cart
        setCartItems(cartItems=>[...cartItems, product])
    }

    const removeFromCart = (event) => {
        const id = event.target.id
        const virtualCart = [...cartItems]
        console.log(virtualCart)
        for (let i=0;i<virtualCart.length;i++) {
            if (virtualCart[i]._id === event.target.id)
                virtualCart.splice(i, 1)
        }
        setCartItems(virtualCart)
    }

    const cartCombine = Object.values(cartItems.reduce((a, {_id, productName, productPrice, productImg}) => {
        a[_id] = a[_id] || {_id, productName, productPrice, productImg, count: 0};
        a[_id].count++;
        return a;
    }, Object.create(null)));
 
    return (
        <CartContext.Provider
            value={{
                cartCombine: cartCombine,
                cartItems: cartItems,
                addToCart: addToCart,
                clickedCart: clickedCart,
                removeFromCart: removeFromCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}