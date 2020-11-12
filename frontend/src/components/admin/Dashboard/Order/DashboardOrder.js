import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DashboardProductTable from './DashboardOrderTable'

export default function DashboardOrder(props) {

    const table = [
        "Order Info",
        "ShippingInfo",
        "Date",
        "PaymentMethod",
        "Items",
        "Total Money",
        "Action"
    ]

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Update order successfully
            </div>
            <DashboardProductTable
                icon = {faUser}
                title = "Orders"
                color = "orange"
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