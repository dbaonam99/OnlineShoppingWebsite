import React, { useState } from 'react';
import '../../App.css';

import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function ProductReview(props) {

    const defaultStar = {
        size: 24,
        value: 0,
        activeColor: "#fda32a",
        color: "#ddd",
        isHalf: true,
        edit: true
    }
    const [full, setFull] = useState(false);
    
    return(
        <div className="ProductReview" ref={props.bRef} id={props.id}>
            <div className="productreview-container">
                <div className="productreview-tab flex-center">
                    <div 
                        className={props.tabId === 0 ? "productreview-title search-tab-active" : "productreview-title"}
                        onClick={()=>{props.setTab(0)}}>
                        Description
                    </div>
                    <div 
                        className={props.tabId === 1 ? "productreview-title search-tab-active" : "productreview-title"}
                        onClick={()=>{props.setTab(1)}}>
                        Reviews
                        <span className={props.tabId === 1 ? "span-active" : ""}>
                            {props.productVote.length}
                        </span>
                    </div>
                </div>
                <div className="productreview-content">
                    {
                        props.tabId === 0 && 
                        <div className="productreview-text"> 
                            {props.productDes}
                        </div>
                    }
                    {
                        props.tabId === 1 && 
                        <div className="productreview-list"> 
                            {props.productVote.map((item, index) => {
                                const ratingStar = {
                                    size: 12,
                                    value: item.ratingStar,
                                    edit: false,
                                    activeColor: "#fda32a",
                                    color: "#ddd",
                                    isHalf: true
                                }
                                return (
                                    <div 
                                        className="productreview-item flex"
                                        key={index}
                                        >
                                        <div className="reviewer">
                                            <img src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/73321413_146697059956770_7174055866474168320_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=LxnVeUN0iWEAX-FROIZ&_nc_ht=scontent.fvca1-2.fna&oh=832b14ac63d67b7f58e34eec08fed9ad&oe=5F97B27C" width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div className="review-info">
                                            <div className="review-first flex">
                                                <div className="reviewer-name">{item.name}</div>
                                                <div className="reviewer-ratingStar">
                                                    <ReactStars {...ratingStar} />
                                                </div>
                                            </div>
                                            <div className="review-second">
                                                {item.ratingDate}
                                            </div>
                                            <div 
                                                id={index}
                                                className={full === false ? "review-third review-third-full" : "review-third"}
                                                onClick={()=> {
                                                    if (item.ratingText.length >= 175) {
                                                        if (full===false) setFull(true)
                                                        else setFull(false)
                                                    }
                                                }}>
                                                {item.ratingText}
                                            </div>
                                            <div className="review-img flex">
                                                {item.ratingImg.map((item, index) => {
                                                    return (
                                                        <img 
                                                            src={item}
                                                            key={index}
                                                            alt=""
                                                            width="72px"
                                                            height="72px"
                                                        ></img>
                                                    )
                                                })}
                                            </div>
                                            <div className="review-like">
                                                <FontAwesomeIcon icon={faThumbsUp} className="mr-5"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        <div className="productreview-line"></div>
                                    </div>
                                )
                            })} 
                            <div className="productreview-review">
                                <div>Add A Review</div>
                                <div style={{ color: "#888", textAlign: 'center', fontSize: '12px', marginBottom: '20px'}}>Your email address will not be published. Required fields are marked *</div>
                                <div style={{ color: "#888", fontSize: '14px', marginBottom: '10px'}}>Your rating *</div>
                                <ReactStars {...defaultStar} />
                                <form className="review-form">
                                    <p className="review-form-title">Your review *</p>
                                    <input type="text" className="w-100 no-outline"></input>
                                    <div className="flex w-100">
                                        <div className="w-100 mr-2">
                                            <p className="review-form-title">Name *</p>
                                            <input type="text" className="w-100 no-outline"></input>
                                        </div>
                                        <div className="w-100 ml-2">
                                            <p className="review-form-title">Email *</p>
                                            <input type="email" className="w-100 no-outline"></input>
                                        </div>
                                    </div>
                                </form>
                                <div className="submit-btn">
                                    <p>Submit</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className="product-info-line"></div>
        </div>
    )
}
