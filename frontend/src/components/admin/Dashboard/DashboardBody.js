import React, { useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import DashboardHeader from './DashboardHeader'
import DashboardMain from './Main/DashboardMain';
import classNames from 'classnames'
import DashboardInbox from './Inbox/DashboardInbox';
import DashboardProduct from './Product/DashboardProduct';
import DashboardProductInfo from './Product/DashboardProductInfo';

export default function DashboardBody(props) {

    const tabId = props.tabId;
    return (
        <div 
            className={classNames("DashboardBody", {
                DashboardBody_small: !props.openMenu
            })}>
            {props.openCreate && <DashboardProductInfo/>}
            <DashboardHeader
                itemName= {props.menuItems[tabId-1].name}
                setOpenMenuOnClick = {props.setOpenMenuOnClick}
                openMenu = {props.openMenu}
            />
            {
                tabId === "1" && <DashboardMain/>
            }
            {
                tabId === "2" && <DashboardInbox/>
            }
            {
                tabId === "3" && <div>tab 3</div>
            }
            {
                tabId === "4" && 
                <DashboardProduct
                    setOpenCreateFunc={props.setOpenCreateFunc}
                />
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