import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import '../../Styles/Account.css'
import {
    withRouter
} from 'react-router-dom'
import { UserContext } from '../../contexts/User'


function AccountInfo(props) {

    const { 
        userInfo
    } = useContext(UserContext);

    console.log(userInfo)

    const [tabId, setTabId] = useState(1);
    const [userFullName, setUserFullName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userOldPassword, setUserOldPassword] = useState("")
    const [userNewPassword, setUserNewPassword] = useState("")
    const [userAvt, setUserAvt] = useState("")

    useEffect(()=>{
        setUserFullName(userInfo.userFullName)
        setUserEmail(userInfo.userEmail)
        setUserAvt(userInfo.userAvt || "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/73321413_146697059956770_7174055866474168320_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=ni-Cr2_KyP0AX-BfQkv&_nc_ht=scontent-sin6-1.xx&oh=9cbda6699093e8dbb061a92c5bb58c7e&oe=5FCB1CFC")
    },[])

    return(
        <div className='AccountInfo'>
            <div className="accountinfo-container flex">
                <div className="accountinfo-menu">
                    <div className="accountinfo-avt flex">
                        <img 
                            style={{borderRadius: '50%'}}
                            className="accountinfo-avt-img"
                            src={userAvt} 
                            alt=""
                            width="48px"
                            height="48px"
                        ></img>
                        <div className="accountinfo-avt-name">
                            {userInfo.userName}
                        </div>
                    </div>
                    <div className="accountinfo-menu-list">
                        <div 
                            className={tabId === 1 ? "accountinfo-active accountinfo-menu-item flex" : "accountinfo-menu-item flex"} 
                            onClick={()=> setTabId(1)}>My account</div>
                        <div 
                            className={tabId === 2 ? "accountinfo-active accountinfo-menu-item flex" : "accountinfo-menu-item flex"} 
                            onClick={()=> setTabId(2)}>Orders</div>
                        <div 
                            className={tabId === 3 ? "accountinfo-active accountinfo-menu-item flex" : "accountinfo-menu-item flex"} 
                            onClick={()=> setTabId(3)}>Notification</div>
                        <div 
                            className={tabId === 4 ? "accountinfo-active accountinfo-menu-item flex" : "accountinfo-menu-item flex"}  
                            onClick={()=> setTabId(4)}>Log out</div>
                    </div>
                </div>
                <div className="accountinfo-main">
                    {
                        tabId === 1 && 
                        <div>
                            <div className="accountinfo-title">
                                <p>Account Infomation</p>
                                <p>Manage account information for account security</p>
                            </div>
                            <div className="accountinfo-body flex">
                                <form>
                                    <div className="accountinfo-body2 flex">
                                        <table>
                                            <tr>
                                                <td>Username</td>
                                                <td>
                                                    {userInfo.userName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Full name</td>
                                                <td>
                                                    <input 
                                                        type="text"
                                                        className="input"
                                                        name="fullname" 
                                                        value={userFullName}
                                                        onChange={(event)=>{
                                                            setUserFullName(event.target.value)
                                                        }}
                                                        value={userFullName}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>
                                                    <input 
                                                        type="email"
                                                        className="input"
                                                        name="email" 
                                                        value={userEmail}
                                                        onChange={(event)=>{
                                                            setUserEmail(event.target.value)
                                                        }}
                                                        value={userEmail}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Old password</td>
                                                <td>
                                                    <input 
                                                        type="password"
                                                        className="input"
                                                        name="email" 
                                                        value={userOldPassword}
                                                        onChange={(event)=>{
                                                            setUserOldPassword(event.target.value)
                                                        }}
                                                        value={userOldPassword}
                                                    ></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>New password</td>
                                                <td>
                                                    <input 
                                                        type="password"
                                                        className="input"
                                                        name="email" 
                                                        value={userNewPassword}
                                                        onChange={(event)=>{
                                                            setUserNewPassword(event.target.value)
                                                        }}
                                                        value={userNewPassword}
                                                    ></input>
                                                </td>
                                            </tr>
                                        </table>

                                        <div className="accountinfo-editavt flex">
                                            <img 
                                                style={{borderRadius: '50%'}}
                                                className="accountinfo-editavt-img"
                                                src={userAvt} 
                                                alt=""
                                                width="100px"
                                                height="100px"
                                            ></img>
                                            <input 
                                                type="file"
                                                className="accountinfo-editavt-input">
                                            </input>
                                        </div>
                                        
                                    </div>
                                    <div className="accountinfo-btn-row">
                                        <button className="accountinfo-btn btn">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                    {
                        tabId === 2 && 
                        <div>2</div>
                    }
                    {
                        tabId === 3 && 
                        <div>3</div>
                    }
                    {
                        tabId === 4 && 
                        <div>4</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(AccountInfo);