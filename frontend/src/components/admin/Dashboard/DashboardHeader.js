import React from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { faBell, faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function DashboardHeader(props) {

    return (
        <div className="dashboard-header flex">
            <div className="flex-center">
                <div className="menu-opt flex-center"
                    onClick={props.setOpenMenuOnClick}>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </div>
                <p>{props.itemName}</p>
            </div>
            <div className="flex-center">
                <form className="menu-search flex">
                    <input type="text" placeholder="Search..."></input>
                    <div className="flex-center">
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                    </div>
                </form>
                <div className="menu-notice">
                    <FontAwesomeIcon icon={faBell}/>
                </div>
            </div>
        </div>
    )
}