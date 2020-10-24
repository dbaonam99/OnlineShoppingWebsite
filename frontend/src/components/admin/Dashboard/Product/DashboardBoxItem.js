import React from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactStars from "react-rating-stars-component";
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function DashboardBoxItems(props) {

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
                            <input type="text" placeholder="Search records"></input>
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
                                props.products.map((item, index) => {
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
                                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                                    </div>
                                                    <div 
                                                        className="action-item flex-center action-red"
                                                        // onClick={deleteOnClick}
                                                        >
                                                        <FontAwesomeIcon icon={faTimes}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}