import React from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function DashboardTotalCount(props) {

    return (
        <div className="total-count-item">
            <div className="total-count-item-container">
                <div className={`headerbox count ${props.color} flex-center`}>
                    <FontAwesomeIcon icon={props.icon} className="icon"/>
                </div>
                <div className="total-count-header flex-center">
                    <p>{props.title}</p>
                </div>
                <div className="dashboard-count">
                    <p>{props.count}</p>
                </div>
                <div className="count-line"></div>
                <div className="count-status flex-center">
                    <FontAwesomeIcon icon={faArrowUp} className="count-up"/>
                    <p className="count-up">{props.percent}%</p> 
                    <p>since last month</p>
                </div>
            </div>
        </div>
    )
}