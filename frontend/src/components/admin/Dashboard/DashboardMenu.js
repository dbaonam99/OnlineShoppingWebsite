import React, { useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faChartLine, faFileInvoice, faHome, faIdCard, faInbox, faNewspaper, faSignOutAlt, faTshirt, faUser } from '@fortawesome/free-solid-svg-icons'


export default function DashboardMenu() {

    const [openUserOpt, setOpenUserOpt] = useState(false)
    const clickToShowUserOpt = () => {
        if (openUserOpt) setOpenUserOpt(false);
        else setOpenUserOpt(true);
    }
    return (
        <div className="DashboardMenu">
            <div className="db-menu-overlay"></div>
            <div className="db-menu">
                <div className="db-menu-logo">
                    <img alt="" src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo-light.svg" height='24px'></img>
                </div>
                <div className="menu-line"></div>
                <div 
                    className="db-menu-user"
                    onClick={clickToShowUserOpt}
                >
                    <div className="flex">
                        <div className="db-menu-avt flex-center">
                            <img alt="" src="https://3.bp.blogspot.com/-kZtIWvxcorE/XG6Raeh5FWI/AAAAAAAALf4/RzyQNykxgJYqz-tK5nBBBIqlOEm2qU-mwCLcBGAs/s1600/0061jeoUly1g0e0l5schoj30u00u0kk2.jpg"></img>
                        </div>
                        <div className="db-menu-name">Name</div>
                        { openUserOpt && <FontAwesomeIcon icon={faAngleDown} style={{fontSize: '18px'}}/>}
                        { openUserOpt === false && <FontAwesomeIcon icon={faAngleUp} style={{fontSize: '18px'}}/>}
                    </div>
                    <div className={openUserOpt ? "db-menu-user-opt closeOpt" : "db-menu-user-opt"}>
                        <div className="db-menu-item flex-center">
                            <FontAwesomeIcon icon={faIdCard} style={{fontSize: '18px'}} className="icon"/>
                            <p>profile</p>
                        </div>
                        <div className="db-menu-item flex-center" style={{margin: '0'}}>
                            <FontAwesomeIcon icon={faSignOutAlt} style={{fontSize: '18px'}} className="icon"/>
                            <p>Log out</p>
                        </div>
                    </div>
                </div>
                <div className="menu-line"></div>
                <div className="db-menu-listitem">
                    <div className="db-menu-item flex-center">
                        <FontAwesomeIcon icon={faHome} style={{fontSize: '18px'}} className="icon"/>
                        <p>Dashboard</p>
                    </div>
                    <div className="db-menu-item flex-center">
                        <FontAwesomeIcon icon={faInbox} style={{fontSize: '18px'}} className="icon"/>
                        <p>Messages</p>
                    </div>
                    <div className="db-menu-item flex-center">
                        <FontAwesomeIcon icon={faFileInvoice} style={{fontSize: '18px'}} className="icon"/>
                        <p>Orders</p>
                    </div>
                    <div className="db-menu-item flex-center">
                        <FontAwesomeIcon icon={faTshirt} style={{fontSize: '18px'}} className="icon"/>
                        <p>Products</p>
                    </div>
                    <div className="db-menu-item flex-center">
                        <FontAwesomeIcon icon={faNewspaper} style={{fontSize: '18px'}} className="icon"/>
                        <p>News</p>
                    </div>
                    <div className="db-menu-item flex-center">
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '18px'}} className="icon"/>
                        <p>Users</p>
                    </div>
                    <div className="db-menu-item flex-center">
                        <FontAwesomeIcon icon={faChartLine} style={{fontSize: '18px'}} className="icon"/>
                        <p>Reports</p>
                    </div>
                </div>
            </div>
        </div>
    )
}