import React, { useEffect, useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import DashboardHeader from './DashboardHeader'
import DashboardMain from './DashboardMain';
import classNames from 'classnames'
import Axios from 'axios';

export default function DashboardBody(props) {

    const tabId = props.tabId;
    const [chatData, setChatData] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:4000/chat`)
            .then(res => {
                setChatData(res.data)
            }
        )
    },[])

    return (
        <div 
            className={classNames("DashboardBody", {
                DashboardBody_small: !props.openMenu
            })}>
            <DashboardHeader
                itemName= {props.menuItems[tabId-1].name}
                setOpenMenuOnClick = {props.setOpenMenuOnClick}
                openMenu = {props.openMenu}
            />
            {
                tabId === "1" && <DashboardMain/>
            }
            {
                tabId === "2" && 
                chatData.map((item, index)=> {
                    return (
                        <div key={index}>
                            <p>{item.chatName}</p>
                            <p>{item.chatEmail}</p>
                            {item.chatContent.map((item,index)=>{
                                return (
                                    <div key={index}>
                                        <p>{item.text}</p>
                                        <p>{item.date}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
            {
                tabId === "3" && <div>tab 3</div>
            }
            {
                tabId === "4" && <div>tab 4</div>
            }
            {
                tabId === "5" && <div>tab 5</div>
            }
            {
                tabId === "6" && <div>tab 6</div>
            }
            {
                tabId === "7" && <div>tab 7</div>
            }
        </div>
    )
}