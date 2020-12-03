import React from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function DashboardTotalCount(props) {

    const item = props.item 

    return (
        <div className="total-count-item">
            { item &&
                <div className="total-count-item-container">
                    <div className={`headerbox count ${item.color} flex-center`}>
                        <FontAwesomeIcon icon={item.icon} className="icon"/>
                    </div>
                    <div className="total-count-header flex-center">
                        <p>{item.title}</p>
                    </div>
                    <div className="dashboard-count">
                        <p>{item.count}</p>
                    </div>
                    <div className="count-line"></div>
                    {
                        item.isDecrease &&
                        <div className="count-status flex-center">
                            <FontAwesomeIcon icon={faArrowUp} className="count-up"/>
                            <p className="count-up">{item.percent}%</p> 
                            <p>since last month</p>
                        </div>
                    }
                    {
                        !item.isDecrease &&
                        <div className="count-status flex-center">
                            <FontAwesomeIcon icon={faArrowDown} className="count-down"/>
                            <p className="count-down">{item.percent}%</p> 
                            <p>since last month</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}