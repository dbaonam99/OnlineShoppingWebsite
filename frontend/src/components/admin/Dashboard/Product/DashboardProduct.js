import { faTshirt } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import DashboardBoxItems from './DashboardBoxItem'
import axios from 'axios'

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

    return (
        <div className="dashboard-product">
            <DashboardBoxItems
                icon = {faTshirt}
                title = "Products"
                color = "pink"
                table = {table}
                products = {products}
                setOpenCreateFunc = {props.setOpenCreateFunc}
            />
        </div>
    )
}