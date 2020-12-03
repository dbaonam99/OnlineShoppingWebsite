import React, { useEffect, useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { faBell, faEllipsisV, faListUl, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'

export default function DashboardHeader(props) {

    const [openNotice, setOpenNotice] = useState(null)
    const [notice, setNotice] = useState(null)
    const [unreadedNotice, setUnreadedNotice] = useState(0)

    useEffect(()=>{
        Axios.get(`http://pe.heromc.net:4000/notice`)
            .then(res => {
                setNotice((res.data).reverse())
                let count = 0;
                for (let i in res.data) {
                    if (res.data[i].isRead === 'false') {
                        count++
                    }
                    setUnreadedNotice(count)
                }
            } 
        )
    },[props.orderNotice])

    const readNotice = () => {
        if (openNotice) {
            setOpenNotice(false)
        } else {
            Axios.post(`http://pe.heromc.net:4000/notice/update`, {
                readAll: true
            })
            setUnreadedNotice(0)
            setOpenNotice(true)
        }
    } 
    const openMenuOnClick = () => {
        props.setOpenMenuOnClick()
    }
    
    return (
        <div className="dashboard-header flex">
            <div className="flex-center">
                <div className="menu-opt flex-center"
                    onClick={openMenuOnClick}>
                    { props.openMenu && <FontAwesomeIcon icon={faEllipsisV}/>}
                    { props.openMenu === false && <FontAwesomeIcon icon={faListUl}/>}
                </div>
                <p>{props.itemName}</p>
            </div> 
            <div className="flex-center menu-search-container">
                <form className="menu-search flex">
                    <input type="text" placeholder="Search..." className="menu-search-input"></input>
                    <div className="flex-center">
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                    </div>
                </form>
                <div 
                    className="menu-notice noselect"
                    onClick={readNotice}
                >
                    <FontAwesomeIcon icon={faBell} style={{pointerEvents: 'none'}} className="icon"/>
                    { unreadedNotice> 0 &&
                        <div className="notice-count">{unreadedNotice}</div>
                    }
                    { openNotice && 
                        <div className="notice-box">
                            { notice && 
                                notice.map((item, index) => {
                                    return (
                                        <div 
                                            key={index}
                                            className="notice-item"
                                        >
                                            {item.noticeContent}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}