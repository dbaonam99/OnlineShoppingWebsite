import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/Cart'

import '../Styles/Toast.css'

export default function Toast(props) {
 
    const {
        toast
    } = useContext(CartContext)

    return (
        <div className={toast ? "toast toast-show" : "toast"}>
            <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
            Product is added to cart successfully
        </div>
    )
}