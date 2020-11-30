import React from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactStars from "react-rating-stars-component";

export default function DashboardRecentReview(props) {
    const topRecentVote = props.topRecentVote;

    return (
        <div className="topfive flex-col topfive-rv" style={{width: '60%'}}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content topfive-content-rv flex">
                    <div className="topfive-list">
                        {
                            topRecentVote.map((item, index)=>{
                                const ratingStar = {
                                    size: 12,
                                    value: item.ratingStar,
                                    edit: false,
                                    activeColor: "#fda32a",
                                    color: "#ddd",
                                    isHalf: true
                                };
                                return(
                                    <div 
                                        item={item}
                                        key={index}
                                        className="topfive-div flex recent-padding"
                                    >
                                        <div style={{borderRadius: '50%'}}>
                                            <img style={{borderRadius: '50%', width: "55px", height: "55px"}} src={item.ratingAvt} className="" alt=""></img>
                                        </div>
                                        <div className="review-product">
                                            <div className="review-product-item flex" style={{justifyContent: 'space-between'}}>
                                                <div className="review-product-name flex">
                                                    <h5>{item.productName}</h5>
                                                </div>
                                                <div className="review-product-time">
                                                    { (item.ratingHours && item.ratingMinutes) &&
                                                        <div className="review-product-hours flex">
                                                            <p>{item.ratingHours}:</p>
                                                            <p>{item.ratingMinutes}</p>
                                                        </div>
                                                    }
                                                    { (!item.ratingHours && !item.ratingMinutes) &&
                                                        <div className="review-product-hours flex">
                                                            <p>{item.ratingYears}/</p>
                                                            <p>{item.ratingMonths}/</p>
                                                            <p>{item.ratingDays}</p>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="review-product-item bottom flex">
                                                <div className="review-product-content flex"> 
                                                    <p className="review-product-item-content">{item.ratingName}: {item.ratingText}</p>
                                                </div>
                                                <div className="review-product-star">
                                                    <ReactStars {...ratingStar} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}