import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import '../../Styles/Account.css'
import {
    withRouter
} from 'react-router-dom'
import { UserContext } from '../../contexts/User'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountInfo(props) {

    const tinh = [
        {
            id: 1,
            name: "Hà Nội"
        },
        {
            id: 2,
            name: "TP.HCM"
        }
    ]
    const huyen = [
        {
            id: 1,
            name: "Quận Hoàn Kiếm",
            tinhId: 1
        },
        {
            id: 2,
            name: "Quận 1",
            tinhId: 2
        },
    ]

    const { 
        userInfo,
        setUserInfoFunc
    } = useContext(UserContext);

    const [tabId, setTabId] = useState(1);
    const [userFullName, setUserFullName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userAvt, setUserAvt] = useState("")
    const [file, setFile] = useState("")
    const [provinceId, setProvinceId] = useState("")

    const [toast, setToast] = useState(false)
    
    useEffect(()=>{
        setUserFullName(userInfo.userFullName)
        setUserEmail(userInfo.userEmail)
        setUserAvt(userInfo.userAvt)
    },[])

    const submitInfo = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const formData = new FormData();
        const imageArr = Array.from(file);
        imageArr.forEach(image => {
            formData.append('userAvt', image);
        });
        formData.append("userFullName", userFullName);
        formData.append("userEmail", userEmail);
        formData.append("userPassword", userPassword);
        localStorage.removeItem('token')
        axios.post(`http://localhost:4000/users/update/${userInfo._id}`, formData, config)
            .then(res => {
                console.log(res.data.user)
                setUserInfoFunc(res.data.user);
                localStorage.setItem('token', res.data.token);
            })
            .catch(err => {
                console.log(err.response.data);
            })
        
        setToast(true)
        setTimeout(()=>{
            setToast(false)
        }, 2000)
    }

    console.log(provinceId)

    return(
        <div className='AccountInfo'>
            <div className="accountinfo-container flex">

                <div className={toast ? "toast toast-show" : "toast"} style={{top: '20px'}}>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                    Change account infomation success!
                </div>
                <div className="accountinfo-menu">
                    <div className="accountinfo-avt flex">
                        <img 
                            style={{borderRadius: '50%'}}
                            className="accountinfo-avt-img"
                            src={userInfo.userAvt} 
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
                            onClick={()=> {
                                localStorage.removeItem('token');
                                window.location.reload(false);
                            }}
                            >Log out</div>
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
                                <form onSubmit={submitInfo} encType="multipart/form-data" >
                                    <div className="accountinfo-body2 flex">
                                        <table>
                                            <tr>
                                                <td>Username</td>
                                                <td style={{fontFamily: 'sans-serif'}}>
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
                                                        type="text"
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
                                                <td>Province</td>
                                                <td>
                                                    <select 
                                                        className="input"
                                                        name="tinh" 
                                                        // value={provinceValue}
                                                        onChange={(event)=>{
                                                            setProvinceId(event.target.selectedIndex)
                                                        }}
                                                    >
                                                        <option disabled selected value>select a province</option>
                                                        {tinh.map((item, index) => {
                                                            return (
                                                                <option 
                                                                    key={index}
                                                                    value={item.name}
                                                                >{item.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>District</td>
                                                <td>
                                                    <select 
                                                        className="input"
                                                        name="huyen" 
                                                    >
                                                        <option disabled selected value>select a district</option>
                                                        {huyen.map((item, index) => {
                                                            if (item.tinhId === provinceId) {
                                                                return (
                                                                    <option
                                                                        key={index}
                                                                        value={item.name}
                                                                        >{item.name}</option>
                                                                )
                                                            }
                                                        })}
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>New password</td>
                                                <td>
                                                    <input 
                                                        type="password"
                                                        className="input"
                                                        name="email" 
                                                        value={userPassword}
                                                        onChange={(event)=>{
                                                            setUserPassword(event.target.value)
                                                        }}
                                                        value={userPassword}
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
                                                onChange={(event) => {
                                                    const files = event.target.files;
                                                    setUserAvt(URL.createObjectURL(files[0]))
                                                    const fileArr = Array.prototype.slice.call(files)
                                                    fileArr.forEach(item=>{
                                                        setFile(file=>[...file, item])
                                                    })
                                                }}
                                                type="file"
                                                name="avatar"
                                                className="accountinfo-editavt-input"
                                            ></input>
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
                </div>
            </div>
        </div>
    )
}

export default withRouter(AccountInfo);