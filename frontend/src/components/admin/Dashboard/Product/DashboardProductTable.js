import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactStars from "react-rating-stars-component";
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import classNames from 'classnames'

export default function DashboardProductTable(props) {

    const [products, setProducts] = useState([])
    // const [searchInput, setSearchInput] = useState("")
    const [constProducts, setConstProducts] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
                setConstProducts(res.data)
            }
        )
    },[props.isChange]) 

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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
    const current = products.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pages = [];

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

    const deleteOnClick = (event) => {
        axios.post(`http://localhost:4000/products/delete/:${event.target.id}`, {
            productId: event.target.id
        })
        setProducts(products.filter((item)=>{
            return item._id !== event.target.id
        }))
    }

    const searchOnSubmit = (event) =>{
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        // setSearchInput(event.target.value)
        const searchInput = event.target.value
        const search = []
        for (let i in constProducts) {
            if ((constProducts[i].productName).toLowerCase().includes(searchInput)) {
                search.push(constProducts[i])
            }
        }
        setProducts(search)
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
                            <form onSubmit={searchOnSubmit}>
                                <input type="text" placeholder="Search records"
                                onChange={searchOnChange}></input>
                            </form>
                        </div>
                    </div>
                    <table className="dashboard-table" style={{tableLayout: 'fixed'}}>
                        <tbody>
                            <tr>
                                {
                                    props.table.map((item, index) => {
                                        return (
                                            <th key={index} className="table-title">{item}</th>
                                        )
                                    })
                                }
                            </tr>
                            {
                                current.map((item, index) => {
                                    const date = new Date(item.productDate)
                                    const day = date.getDay();
                                    const month = date.getMonth();
                                    const year = date.getFullYear();
                                    const shortedDate = day + '/' + month + '/' + year;

                                    //Counting star vote
                                    const ratingList = item.productVote.map(a => a.ratingStar); // get all rating
                                    const totalRating = ratingList.reduce((a, b) => a + b, 0)

                                    const averageRating = totalRating/ratingList.length;
                                    const ratingStar = {
                                        size: 12,
                                        value: averageRating,
                                        edit: false,
                                        activeColor: "#fda32a",
                                        color: "#ddd",
                                        isHalf: true
                                    }
                                    return (
                                        <tr key={index}>
                                            <td className="table-name">
                                                <p>{item.productName}</p>
                                            </td>
                                            <td style={{display: 'flex'}}>
                                                <img 
                                                    src={item.productImg[0]} 
                                                    width="70px" height="80px"
                                                    style={{padding: '5px 0'}}
                                                    alt=""
                                                />
                                            </td>
                                            <td>
                                                <p>{item.productPrice}</p>
                                            </td>
                                            { item.productSale > 0 &&
                                                <td>
                                                    <p style={{color: 'green'}}>{item.productSale}%</p>
                                                </td>
                                            }
                                            { item.productSale === 0 &&
                                                <td>
                                                    <p style={{color: 'red'}}>No sale</p>
                                                </td>
                                            }
                                            <td>
                                                <p>{item.productSold}</p>
                                            </td>
                                            {/* <td>
                                                <p style={{textTransform: 'uppercase'}}>{item.productCate}</p>
                                            </td> */}
                                            {/* <td>
                                                <select>
                                                {
                                                    item.productSize.map((item, index)=> {
                                                        return (
                                                                <option>{item}</option>
                                                        )
                                                    })
                                                }
                                                </select>
                                            </td> */}
                                            <td>
                                                <p>{shortedDate}</p>
                                            </td>
                                            <td>
                                                <ReactStars {...ratingStar}/>
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