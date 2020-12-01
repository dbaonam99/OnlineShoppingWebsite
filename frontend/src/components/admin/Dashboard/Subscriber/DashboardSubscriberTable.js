import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import classNames from 'classnames'

export default function DashboardSubscriberTable(props) {

    const [email, setEmail] = useState([])
    const [isSortByName, setIsSortByName] = useState(false)
    const [constEmail, setConstEmail] = useState([])
    
    useEffect(()=>{
        axios.get(`http://pe.heromc.net:4000/email`)
            .then(res => {
                setEmail(res.data)
                setConstEmail(res.data)
            }
        )
    },[props.isChange]) 

    console.log(email)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const choosePage = (event) => {
        if (Number(event.target.id) === 0) {
            setCurrentPage(currentPage)
        } else if (Number(event.target.id) === -1) {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            } else {
                setCurrentPage(1);
            }
        } else if (Number(event.target.id) === 999) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(Number(event.target.id))
        }
    }

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const current = email.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(email.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pages = [];

    if (pageNumbers.length > 3) {
        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else {
            if (currentPage === 1) {
                pages.push(currentPage, currentPage + 1, currentPage + 2 );
            } else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
                pages.push(currentPage -1, currentPage, currentPage + 1);
            } else if (currentPage === pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else {
                pages.push(currentPage - 2, currentPage - 1, currentPage);
            }
        }
    } else if (pageNumbers.length === 3) {
        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else {
            if (currentPage === 1) {
                pages.push(currentPage, currentPage + 1, currentPage + 2 );
            } else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
                pages.push(currentPage -1, currentPage, currentPage + 1);
            } else if (currentPage === pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else {
                pages.push(currentPage - 2, currentPage - 1, currentPage);
            }
        }
    } else if (pageNumbers.length === 2){
        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage);
        } else {
            if (currentPage === 1) {
                pages.push(currentPage, currentPage + 1);
            } else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage);
            }
        }
    } else {
        if (currentPage === 1) {
            pages.push(currentPage);
        }
    }

    const deleteOnClick = (event) => {
        axios.post(`http://pe.heromc.net:4000/email/delete/:${event.target.id}`, {
            id: event.target.id
        })
        setEmail(email.filter((item)=>{
            return item._id !== event.target.id
        }))
    }

    const searchOnSubmit = (event) =>{
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        for (let i in constEmail) {
            if ((constEmail[i].subscriberEmail).toLowerCase().includes(searchInput)) {
                search.push(constEmail[i])
            }
        }
        setEmail(search)
    }

    const sortTable = (event) => {
        if (event.target.id === "SubscriberEmail") {
            if (isSortByName) {
                const sortByName = [...email]
                sortByName.sort(function(a, b) {
                    var userA = a.subscriberEmail.toLowerCase();
                    var userB = b.subscriberEmail.toLowerCase(); 
                    if(userA === userB) return 0; 
                    return userA > userB ? 1 : -1;
                })
                setIsSortByName(false)
                setEmail(sortByName)
            } else {
                const sortByName = [...email]
                sortByName.sort(function(a, b) {
                    var userA = a.subscriberEmail.toLowerCase();
                    var userB = b.subscriberEmail.toLowerCase(); 
                    if(userA === userB) return 0; 
                    return userA < userB ? 1 : -1;
                })
                setIsSortByName(true)
                setEmail(sortByName)
            }
        }
    }

    return (
        <div className="topfive flex-col" style={{width: '100%'}}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content flex-col">
                    <div className="dashboard-addnew flex">
                        <div 
                            className="dashboard-addnew-btn btn"
                            onClick={props.setOpenCreateFunc}
                        >Add new</div>
                        <div className="dashboard-addnew-search">
                            <form 
                                onSubmit={searchOnSubmit}
                            >
                                <input type="text" placeholder="Search records"
                                    onChange={searchOnChange}
                                ></input>
                            </form>
                        </div>
                    </div>
                    <table className="dashboard-table" style={{tableLayout: 'fixed'}}>
                        <tbody>
                            <tr>
                                {
                                    props.table.map((item, index) => {
                                        return (
                                            <th 
                                                key={index} className="table-new-title table-user-title"
                                                onClick={(event)=>{
                                                    sortTable(event)
                                                }}
                                                id={`Subscriber${item}`}
                                            >
                                                {item}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                            {
                                current.map((item, index) => {
                                    let count = 0;
                                    for (let i in item.sendedEmail) {
                                        if (item.sendedEmail[i].isSeen === true) {
                                            count++
                                        }
                                    }
                                    return (
                                        <tr key={index}>
                                            <td className="table-mobile-subscribername">
                                                <p>{item.subscriberEmail}</p>
                                            </td>
                                            <td className="table-mobile-subscribersent">
                                                <p>{item.sendedEmail.length}</p>
                                            </td>
                                            <td className="table-mobile-subscriberread">
                                                <p>{count}</p>
                                            </td>
                                            <td>
                                                <div className="action-table flex">
                                                    <div 
                                                        className="action-item flex-center action-green"
                                                        onClick={props.setOpenEditFunc}
                                                        id={item._id}
                                                        >
                                                        <FontAwesomeIcon style={{pointerEvents: 'none'}} icon={faPencilAlt}/>
                                                    </div>
                                                    <div 
                                                        className="action-item flex-center action-red"
                                                        onClick={deleteOnClick}
                                                        id={item._id}
                                                        >
                                                        <FontAwesomeIcon style={{pointerEvents: 'none'}} icon={faTimes}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                    <div className="pagination-container flex" style={{ justifyContent: 'flex-end', margin: '20px 0'}}>
                        <div className="pagnigation flex-center" onClick={choosePage}>
                            <div id="-1" className={classNames({
                                pagnigation_disable: currentPage === 1
                            })}>←</div>
                            { pages.map(function(number, index) { 
                                if (currentPage === number) {
                                    return (
                                        <div key={number} id={number} className="pagnigation-active">
                                            {number}
                                        </div>
                                    )
                                } else {
                                    return (
                                    <div 
                                        key={number}
                                        id={number}
                                        >
                                            {number}
                                    </div>
                                    )
                                }
                            })}
                            <div id="999" className={classNames({
                                pagnigation_disable: currentPage === pageNumbers.length
                            })}>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}