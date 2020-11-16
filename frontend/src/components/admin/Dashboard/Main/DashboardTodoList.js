import React from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DashboardTodoList(props) {
    const todoList = [
        1,2,3,4,5,7,8,8,8,8,8,8,8,8,8,8,8,8,88
    ]

    return (
        <div className="topfive flex-col" style={{width: '40%'}}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content flex">
                    <div className="topfive-list" style={{height: '350px', overflowY: 'scroll'}}>
                        {todoList &&
                            todoList.map((item, index)=>{
                                return(
                                    <div 
                                        item={item}
                                        key={index}
                                        className="topfive-div flex recent-padding"
                                    >
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}