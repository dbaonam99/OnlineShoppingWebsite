import { faUser } from '@fortawesome/free-solid-svg-icons'
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
            <DashboardProductTable
                icon = {faUser}
                title = "Orders"
                color = "orange"
                table = {table}
                setOpenEditFunc = {props.setOpenEditFunc}
                setCloseEditFunc = {props.setCloseEditFunc}
                isChange = {props.isChange}
            />
        </div>
    )
}