import { faCheckCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DashboardCollectionTable from './DashboardCollectionTable'

export default function DashboardCollection(props) {

    const table = [
        "Name",
        "Banner",
        "Items",
        "Date",
        "Action"
    ]

    return (
        <div className="dashboard-product">
            <div className={props.toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Update collection successfully
            </div>
            <DashboardCollectionTable
                icon = {faShoppingBag}
                title = "Collections"
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