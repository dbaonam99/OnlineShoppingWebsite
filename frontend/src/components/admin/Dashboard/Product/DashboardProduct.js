import { faTshirt } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import DashboardBoxItems from './DashboardBoxItem'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function DashboardProduct(props) {

    const [products, setProducts] = useState([])

    const table = [
        "Name",
        "Images",
        "Price",
        "Sale",
        "Sold",
        // "Category",    
        // "Size",
        "Date",    
        "Rating",
        "Action"
    ]
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    },[])

    if (props.isChange) {
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    }

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '-20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Product is added successfully
            </div>
            <DashboardBoxItems 
                icon = {faTshirt}
                title = "Products"
                color = "pink"
                table = {table}
                products = {products}
                setOpenCreateFunc = {props.setOpenCreateFunc}
                setCloseCreateFunc={props.setCloseCreateFunc}
            />
        </div>
    )
}