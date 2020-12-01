import React, { useEffect, useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faIdCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

export default function DashboardMenu(props) {

    const [openUserOpt, setOpenUserOpt] = useState(false)
    const [hideText, setHideText] = useState(false)
    const clickToShowUserOpt = () => {
        if (openUserOpt) setOpenUserOpt(false);
        else setOpenUserOpt(true);
    }

    const menuItems = props.menuItems;
    const openMenu = props.openMenu;
    const openMenuMobile = props.openMenuMobile;
    useEffect(()=> {
        setTimeout(()=>{
            if (openMenu === false) setHideText(true)
        }, 480)
        if (openMenu === true) setHideText(false)
    }, [setHideText, openMenu]) 

 
    return (
        <div 
            className={classNames("DashboardMenu flex", {
                DashboardMenu_small: !openMenu,
                DashboardMenu_mobile: !openMenuMobile
            })}>
            <div className="db-menu-overlay"></div>
            <div className="db-menu">
                <div className="db-menu-logo flex">
                    <div className="flex-center" style={{height: '24px', marginLeft: '12px'}}>
                        <p className="logo-text">SB</p>
                    </div>
                    { hideText === false
                        &&  
                        <img 
                            alt="" 
                            src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo-light.svg" 
                            height='24px'
                            style={{marginLeft:'27px'}}
                        ></img> 
                    }
                </div>              
                <div className="menu-line"></div>
                <div 
                    className="db-menu-user"
                    onClick={clickToShowUserOpt}
                >
                    <div className="flex-center" style={{padding: '0 5px'}}>
                        <div className="db-menu-avt flex-center">
                            <img alt="" src="https://3.bp.blogspot.com/-kZtIWvxcorE/XG6Raeh5FWI/AAAAAAAALf4/RzyQNykxgJYqz-tK5nBBBIqlOEm2qU-mwCLcBGAs/s1600/0061jeoUly1g0e0l5schoj30u00u0kk2.jpg"></img>
                        </div>
                        { (hideText === false && props.userInfo )&& <p className="db-menu-name" style={{marginLeft: '26px'}}>
                            {props.userInfo.userName}
                        </p> }
                        { hideText === false && openUserOpt === true && <FontAwesomeIcon icon={faAngleUp} style={{fontSize: '18px'}}/>}
                        { hideText === false && openUserOpt === false && <FontAwesomeIcon icon={faAngleDown} style={{fontSize: '18px'}}/>}
                    </div>
                    <div className={openUserOpt ? "db-menu-user-opt closeOpt" : "db-menu-user-opt"}>
                        <div className="db-menu-item flex-center">
                            <FontAwesomeIcon icon={faIdCard} style={{fontSize: '18px'}} className="icon"/>
                            <p className="db-menu-name">profile</p>
                        </div>
                        <div 
                            className="db-menu-item flex-center"
                            style={{margin: '0'}}
                            onClick={()=> {
                                localStorage.removeItem('user-id')
                                localStorage.removeItem('token');
                                sessionStorage.removeItem('chat-id')
                                window.location.reload(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faSignOutAlt} style={{fontSize: '18px'}} className="icon"/>
                            <p className="db-menu-name">Log out</p>
                        </div>
                    </div>
                </div>
                <div className="menu-line"></div>
                <div className="db-menu-listitem">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <div 
                                    key={index}
                                    className={classNames("db-menu-item flex-center", {
                                        db_menu_active: props.tabId === item.id,
                                    })}
                                    onClick={() => {
                                        props.setTabIdOnClick(item.id);
                                        props.setCloseCreateFunc(false);
                                        props.setCloseEditFunc(false);
                                        if (window.innerWidth <= 1110) {
                                            props.setOpenMenuOnClick()
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={item.icon} style={{fontSize: '18px'}} className="icon"/>
                                    {hideText===false&&<p className="db-menu-name">{item.name}</p>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}