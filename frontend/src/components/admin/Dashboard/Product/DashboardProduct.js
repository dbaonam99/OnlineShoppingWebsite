import { faTshirt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import DashboardProductTable from './DashboardProductTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function DashboardProduct(props) {

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

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Update products successfully
            </div>
            <DashboardProductTable
                icon = {faTshirt}
                title = "Products"
                color = "pink"
                table = {table}
                setOpenCreateFunc = {props.setOpenCreateFunc}
                setCloseCreateFunc = {props.setCloseCreateFunc}
                setOpenEditFunc = {props.setOpenEditFunc}
                setCloseEditFunc = {props.setCloseEditFunc}
                isChange = {props.isChange}
            />
        </div>
    )
}