import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext();

export function CartProvider(props) {
    
    const [cartItems, setCartItems] = useState([])
    const [wishListItems, setWishListItems] = useState([])
    const [clickedCart, setClickedCart] = useState(0)
    const [total, setTotal] = useState(0)

    const isExists = (cartItems = [], item = {}) => {
        for (let cartItem of cartItems) {
            if (cartItem._id === item._id) {
                return cartItem;
            }
        }
        return false;
    }

    const addToWishList = (product = {}) => {
        
        const virtualCart = [...wishListItems] 

        if (wishListItems.length === 0) {
            virtualCart.push({...product})
        } else {
            if (!isExists(wishListItems, product)) {
                virtualCart.push({...product})
            }
        }
        setWishListItems(virtualCart)
    }

    const addToCart = (product = {}) => {
        setClickedCart(clickedCart + 1) // scroll on click to cart
        const virtualCart = [...cartItems] 

        if (cartItems.length === 0) {
            virtualCart.push({...product, count: 1})
        } else {
            if (!isExists(cartItems, product)) {
                virtualCart.push({...product, count: 1})
            } else {
                for (let i = 0; i < virtualCart.length; i++) {
                    if (virtualCart[i]._id === product._id) {
                        virtualCart[i].count += 1
                        break
                    }
                }
            }
        }
        setCartItems(virtualCart)
    }

    const removeFromCart = (event) => {
        const id = event.target.id
        const virtualCart = [...cartItems]
        for (let i=0;i<virtualCart.length;i++) {
            if (virtualCart[i]._id === id) {
                virtualCart.splice(i, 1)
            }
        }
        setCartItems(virtualCart)
    }

    const removeFromWishList = (event) => {
        const id = event.target.id
        const virtualCart = [...wishListItems]
        for (let i=0;i<virtualCart.length;i++) {
            if (virtualCart[i]._id === id) {
                virtualCart.splice(i, 1)
            }
        }
        setWishListItems(virtualCart)
    }

    const minusCount = (event) => {
        const id = event.target.id
        const virtualCart = [...cartItems]
        for (let i=0;i<virtualCart.length;i++) {
            if (virtualCart[i]._id === id) {
                if (virtualCart[i].count > 1) {
                    virtualCart[i].count = virtualCart[i].count - 1
                }
            }
        }
        setCartItems(virtualCart)
    }
    
    const plusCount = (event) => {
        const id = event.target.id
        const virtualCart = [...cartItems]
        for (let i=0;i<virtualCart.length;i++) {
            if (virtualCart[i]._id === id) {
                virtualCart[i].count += 1
            }
        }
        setCartItems(virtualCart)
    }

    const updateCount = (event) => {
        const id = event.target.id
        const value = event.target.value
        const virtualCart = [...cartItems]
        for (let i=0;i<virtualCart.length;i++) {
            if (virtualCart[i]._id === id) {
                virtualCart[i].count = Number(value)
            }
        }
        setCartItems(virtualCart)
    }

    const getTotal = () => {
        console.log("-------------")
        let virtualTotal = 0
        for (let i in cartItems) {
            virtualTotal += cartItems[i].count * cartItems[i].productPrice
        }
        setTotal(virtualTotal)
    }

    useEffect(()=>{
        getTotal()
    }, [cartItems])
    
    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                addToCart: addToCart,
                wishListItems: wishListItems,
                addToWishList: addToWishList,
                clickedCart: clickedCart,
                removeFromCart: removeFromCart,
                plusCount: plusCount,
                minusCount: minusCount,
                removeFromWishList: removeFromWishList,
                updateCount: updateCount,
                total: total
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}