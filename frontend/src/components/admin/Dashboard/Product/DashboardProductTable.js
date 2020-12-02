import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import classNames from 'classnames'

export default function DashboardProductTable(props) {

    const [products, setProducts] = useState([])
    // const [searchInput, setSearchInput] = useState("")
    const [constProducts, setConstProducts] = useState([])
    const [isSortByName, setIsSortByName] = useState(false)
    const [isSortByPrice, setIsSortByPrice] = useState(false)
    const [isSortBySale, setIsSortBySale] = useState(false)
    const [isSortBySold, setIsSortBySold] = useState(false)
    
    useEffect(()=>{
        axios.get(`http://pe.heromc.net:4000/products`)
            .then(res => {
                setProducts(res.data)
                setConstProducts(res.data)
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
    const current = products.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
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
        axios.post(`http://pe.heromc.net:4000/products/delete/:${event.target.id}`, {
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
        const searchInput = event.target.value
        const search = []
        for (let i in constProducts) {
            if ((constProducts[i].productName).toLowerCase().includes(searchInput)) {
                search.push(constProducts[i])
            }
        }
        setProducts(search)
    }

    const sortTable = (event) => {
        if (event.target.id === "ProductName") {
            if (isSortByName) {
                const sortByName = [...products]
                sortByName.sort(function(a, b) {
                    var nameA = a.productName.toLowerCase();
                    var nameB = b.productName.toLowerCase(); 
                    if(nameA === nameB) return 0; 
                    return nameA > nameB ? 1 : -1;
                })
                setIsSortByName(false)
                setProducts(sortByName)
            } else {
                const sortByName = [...products]
                sortByName.sort(function(a, b) {
                    var nameA = a.productName.toLowerCase();
                    var nameB = b.productName.toLowerCase(); 
                    if(nameA === nameB) return 0; 
                    return nameA < nameB ? 1 : -1;
                })
                setIsSortByName(true)
                setProducts(sortByName)
            }
        }
        if (event.target.id === "ProductPrice") {
            if (isSortByPrice) {
                const sortByPrice = [...products]
                sortByPrice.sort(function(a, b) {
                    var priceA = a.productPrice;
                    var priceB = b.productPrice; 
                    if(priceA === priceB) return 0; 
                    return priceA > priceB ? 1 : -1;
                })
                setIsSortByPrice(false)
                setProducts(sortByPrice)
            } else {
                const sortByPrice = [...products]
                sortByPrice.sort(function(a, b) {
                    var priceA = a.productPrice;
                    var priceB = b.productPrice; 
                    if(priceA === priceB) return 0; 
                    return priceA < priceB ? 1 : -1;
                })
                setIsSortByPrice(true)
                setProducts(sortByPrice)
            }
        }
        if (event.target.id === "ProductSale") {
            if (isSortBySale) {
                const sortBySale = [...products]
                sortBySale.sort(function(a, b) {
                    var saleA = a.productSale;
                    var saleB = b.productSale; 
                    if(saleA === saleB) return 0; 
                    return saleA > saleB ? 1 : -1;
                })
                setIsSortBySale(false)
                setProducts(sortBySale)
            } else {
                const sortBySale = [...products]
                sortBySale.sort(function(a, b) {
                    var saleA = a.productSale;
                    var saleB = b.productSale; 
                    if(saleA === saleB) return 0; 
                    return saleA < saleB ? 1 : -1;
                })
                setIsSortBySale(true)
                setProducts(sortBySale)
            }
        }
        if (event.target.id === "ProductSold") {
            if (isSortBySold) {
                const sortBySold = [...products]
                sortBySold.sort(function(a, b) {
                    var SoldA = a.productSold;
                    var SoldB = b.productSold; 
                    if(SoldA === SoldB) return 0; 
                    return SoldA > SoldB ? 1 : -1;
                })
                setIsSortBySold(false)
                setProducts(sortBySold)
            } else {
                const sortBySold = [...products]
                sortBySold.sort(function(a, b) {
                    var SoldA = a.productSold;
                    var SoldB = b.productSold; 
                    if(SoldA === SoldB) return 0; 
                    return SoldA < SoldB ? 1 : -1;
                })
                setIsSortBySold(true)
                setProducts(sortBySold)
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
                                            <th 
                                                key={index} className="table-title"
                                                onClick={(event)=>{
                                                    sortTable(event)
                                                }}
                                                id={`Product${item}`}
                                            >
                                                {item}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                            {
                                current.map((item, index) => {
                                    const date = new Date(item.productDate)
                                    const day = date.getDate();
                                    const month = date.getMonth() + 1;
                                    const year = date.getFullYear();
                                    const shortedDate = day + '/' + month + '/' + year;
                                    //Counting star vote
                                    const ratingList = item.productVote.map(a => a.ratingStar); // get all rating
                                    
                                    const totalRating = ratingList.reduce((a, b) => a + b, 0);

                                    var averageRating = 0;
                                    if (totalRating === 0) {
                                        averageRating = 0
                                    } else {
                                        averageRating = totalRating/Number(ratingList.length);
                                    }

                                    return (
                                        <tr key={index}>
                                            <td className="table-name table-mobile-productname">
                                                <p>{item.productName}</p>
                                            </td>
                                            <td className="table-mobile-productimages" style={{display: 'flex'}}>
                                                <img 
                                                    src={item.productImg[0]} 
                                                    width="70px" height="80px"
                                                    style={{padding: '5px 0'}}
                                                    alt=""
                                                />
                                            </td>
                                            <td>
                                                <p>{item.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                                            </td>
                                            { item.productSale > 0 &&
                                                <td className="table-mobile-productsale">
                                                    <p style={{color: 'green'}}>{item.productSale}%</p>
                                                </td>
                                            }
                                            { item.productSale === 0 &&
                                                <td className="table-mobile-productsale">
                                                    <p style={{color: 'red'}}>No sale</p>
                                                </td>
                                            }
                                            <td className="table-mobile-productsold">
                                                <p>{item.productSold}</p>
                                            </td>
                                            <td className="table-mobile-productdate">
                                                <p>{shortedDate}</p>
                                            </td>
                                            <td className="star-rating">
                                                <div className="star-rating-list flex">
                                                    <p className={ 
                                                        averageRating > 0 ? "star-color star" :"star"
                                                    }>★</p>
                                                    <p className={ 
                                                        averageRating > 1 ? "star-color star" :"star"
                                                    }>★</p>
                                                    <p className={ 
                                                        averageRating > 2 ? "star-color star" :"star"
                                                    }>★</p>
                                                    <p className={ 
                                                        averageRating > 3 ? "star-color star" :"star"
                                                    }>★</p>
                                                    <p className={ 
                                                        averageRating > 4 ? "star-color star" :"star"
                                                    }>★</p>
                                                </div>
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