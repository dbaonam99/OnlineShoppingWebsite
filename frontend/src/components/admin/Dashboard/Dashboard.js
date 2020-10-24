import React, { useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import DashboardBody from './DashboardBody'
import DashboardMenu from './DashboardMenu'
import { faChartLine, faFileInvoice, faHome, faInbox, faNewspaper, faTshirt, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
    const menuItems = [
        {
            id: "1",
            name: "Dashboard",
            icon: faHome
        },
        {
            id: "2",
            name: "Messages",
            icon: faInbox
        },
        {
            id: "3",
            name: "Orders",
            icon: faFileInvoice
        },
        {
            id: "4",
            name: "Products",
            icon: faTshirt
        },
        {
            id: "5",
            name: "News",
            icon: faNewspaper
        },
        {
            id: "6",
            name: "Users",
            icon: faUser
        },
        {
            id: "7",
            name: "Reports",
            icon: faChartLine
        },
    ]
    const [tabId, setTabId] = useState("4");
    const [openMenu, setOpenMenu] = useState(true);
    const [productId, setProductId] = useState("")

    const setTabIdOnClick = (id) => {
        setTabId(id);
    }
    const setOpenMenuOnClick = (id) => {
        if (openMenu) setOpenMenu(false);
        else setOpenMenu(true);
    }

    const [openCreate, setOpenCreate] = useState(false)

    const setOpenCreateFunc = () => {
        document.body.style.overflow = 'hidden';
        setOpenCreate(true)
    }

    const setCloseCreateFunc = (bool) => {
        document.body.style.overflow = 'unset';
        setOpenCreate(bool)
    }

    const [openEdit, setOpenEdit] = useState(false)

    const setOpenEditFunc = (event) => {
        document.body.style.overflow = 'hidden';
        setOpenEdit(true)
        setProductId(event.target.id)
    }
    
    const setCloseEditFunc = (bool) => {
        document.body.style.overflow = 'unset';
        setOpenEdit(bool)
    }

    return (
        <div className="Dashboard flex">
            <DashboardMenu
                setTabIdOnClick = {setTabIdOnClick}
                setOpenMenuOnClick = {setOpenMenuOnClick}
                tabId = {tabId}
                menuItems = {menuItems}
                openMenu = {openMenu} 
                setCloseCreateFunc={setCloseCreateFunc}
                setCloseEditFunc={setCloseEditFunc}
            />
            <DashboardBody
                tabId = {tabId}
                menuItems = {menuItems}
                openMenu = {openMenu}
                openCreate = {openCreate}
                openEdit = {openEdit}
                setOpenMenuOnClick = {setOpenMenuOnClick}
                setOpenCreateFunc={setOpenCreateFunc}
                setCloseCreateFunc={setCloseCreateFunc}
                setOpenEditFunc={setOpenEditFunc}
                setCloseEditFunc={setCloseEditFunc}
                productId={productId}
            />
        </div>
    )
}