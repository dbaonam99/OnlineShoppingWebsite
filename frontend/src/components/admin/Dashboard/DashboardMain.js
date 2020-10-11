import { faBell, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'


export default function DashboardMain() {
    return (
        <div className="DashboardMain">
            <div className="dashboard-header flex">
                <div className="menu-opt">
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </div>
                <p>Dashboard</p>
                <form>
                    <input></input>
                </form>
                <div className="menu-notice">
                    <FontAwesomeIcon icon={faBell}/>
                </div>
            </div>
        </div>
    )
}