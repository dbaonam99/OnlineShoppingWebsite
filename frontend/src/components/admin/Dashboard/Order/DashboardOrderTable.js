import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import classNames from 'classnames'

export default function DashboardUserTable(props) {

    const [order, setOrder] = useState([])
    const [isSortByName, setIsSortByName] = useState(false)
    const [isSortByTotal, setIsSortByTotal] = useState(false)
    const [constOrder, setConstOrder] = useState([])
    
    useEffect(()=>{
        axios.get(`http://pe.heromc.net:4000/order`)
            .then(res => {
                setOrder(res.data)
                setConstOrder(res.data)
            }
        )
    },[props.isChange]) 

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
    const current = order.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(order.length / itemsPerPage); i++) {
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
        const id = event.target.id
        axios.post(`http://pe.heromc.net:4000/order/delete/:${event.target.id}`, {
            id: id
        }).then(()=>{
            setOrder(order.filter((item)=>{
                return item._id !== id
            }))
        })
    }

    const searchOnSubmit = (event) =>{
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        for (let i in constOrder) {
            if ((constOrder[i].orderName).toLowerCase().includes(searchInput)) {
                search.push(constOrder[i])
            } 
            else if ((constOrder[i].orderId).toString().includes((searchInput))) {
                search.push(constOrder[i])
            }
        }
        setOrder(search)
    }

    const sortTable = (event) => {
        if (event.target.id === "OrderOrderInfo") {
            if (isSortByName) {
                const sortByName = [...order]
                sortByName.sort(function(a, b) {
                    var orderA = a.orderName.toLowerCase();
                    var orderB = b.orderName.toLowerCase(); 
                    if(orderA === orderB) return 0; 
                    return orderA > orderB ? 1 : -1;
                })
                setIsSortByName(false)
                setOrder(sortByName)
            } else {
                const sortByName = [...order]
                sortByName.sort(function(a, b) {
                    var orderA = a.orderName.toLowerCase();
                    var orderB = b.orderName.toLowerCase(); 
                    if(orderA === orderB) return 0; 
                    return orderA < orderB ? 1 : -1;
                })
                setIsSortByName(true)
                setOrder(sortByName)
            }
        }
        if (event.target.id === "OrderTotalMoney") {
            if (isSortByTotal) {
                const sortByTotal = [...order]
                sortByTotal.sort(function(a, b) {
                    var totalA = a.orderTotal;
                    var totalB = b.orderTotal; 
                    if(totalA === totalB) return 0; 
                    return totalA > totalB ? 1 : -1;
                })
                setIsSortByTotal(false)
                setOrder(sortByTotal)
            } else {
                const sortByTotal = [...order]
                sortByTotal.sort(function(a, b) {
                    var totalA = a.orderTotal;
                    var totalB = b.orderTotal; 
                    if(totalA === totalB) return 0; 
                    return totalA < totalB ? 1 : -1;
                })
                setIsSortByTotal(true)
                setOrder(sortByTotal)
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
                            <tr className="dashboard-order">
                                {
                                    props.table.map((item, index) => { 
                                        return (
                                            <th 
                                                key={index} className="table-new-title table-order-title"
                                                onClick={(event)=>{
                                                    sortTable(event)
                                                }} 
                                                id={`Order${item.split(" ").join("")}`}
                                            >
                                                {item}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                            {
                                current.map((item, index) => {
                                    const date = new Date(item.orderDate)
                                    const day = date.getDate()
                                    const month = date.getMonth() + 1
                                    const year = date.getFullYear()
                                    var totalItem = 0;
                                    for (let i in item.orderList) {
                                        totalItem += item.orderList[i].amount
                                    }
                                    return (
                                        <tr key={index} className="mobile-table">
                                            <td className="mobile-table-orderinfo">
                                                <ul style={{margin: '10px 0'}}>
                                                    <li className="flex">
                                                        <p style={{marginRight: '5px', fontWeight: 'bold'}}>#{item.orderId}</p> 
                                                        <p className="mobile-table-name">by {item.orderName}</p>
                                                    </li>
                                                </ul>    
                                            </td>
                                            <td className="mobile-table-shippinginfo"> 
                                                <div className="flex" style={{alignItems: 'center',margin: '10px 0'}}>
                                                    <p 
                                                        style={{wordWrap: 'break-word', WebkitLineClamp: '3'}}
                                                    >{item.orderAddress}, {item.orderHuyen}, {item.orderTinh}</p>
                                                </div> 
                                            </td>
                                            <td>
                                                <p>{day}-{month}-{year}</p>
                                            </td>
                                            <td className="mobile-table-paymentmethod">
                                                <p style={{textTransform: 'capitalize'}}>{item.orderPaymentMethod}</p>
                                            </td>
                                            <td>
                                                {   typeof(totalItem) === 'number' &&
                                                        <div key={index} className="flex" style={{justifyContent: 'space-between'}}>
                                                            {/* <p style={{margin: '10px 0', width: '100%', WebkitLineClamp: '2'}}>{virtualArr.productName}</p> */}
                                                            <p style={{margin: '10px 0', width: '50px', marginLeft: '20px'}}>{totalItem}</p>
                                                        </div>
                                                }
                                            </td>
                                            <td className="mobile-table-totalmoney">
                                                <p>{item.orderTotal} đ</p>
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