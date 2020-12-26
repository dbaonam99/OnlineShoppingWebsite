import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';

import ReactStars from "react-rating-stars-component"; 
import ProductReviewContent from './ProductReviewContent';
import { UserContext } from '../../contexts/User';
import axios from 'axios'

export default function ProductReview(props) {

    const { 
        userInfo
    } = useContext(UserContext);

    const [ratingValue, setRatingValue] = useState(0)
    const [reviewInput, setReviewInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")  
    const [product, setProduct] = useState([]);
    const [productVote, setProductVote] = useState([]);

    useEffect(()=>{
        if (userInfo) {
            setNameInput(userInfo.userName)
            setEmailInput(userInfo.userEmail)
        }
        if (props.product) {
            setProduct(props.product); 
            setProductVote(props.product.productVote);
        }
    },[userInfo, props.product])

    const defaultStar = {
        size: 24,
        value: 0,
        activeColor: "#fda32a",
        color: "#ddd",
        isHalf: true,
        edit: true,
        onChange: newValue => {
            setRatingValue(newValue)
        }
    }
    
    const sendReview = (event) => {
        event.preventDefault()
        if (userInfo) {
            const data = {
                ratingName: nameInput,
                ratingDate: new Date().toString(),
                ratingText: reviewInput,
                ratingEmail: emailInput,
                ratingStar: ratingValue,
                ratingAvt: userInfo.userAvt
            }
            axios.post(`http://pe.heromc.net:4000/products/review/${product._id}`, data)
            setProductVote(productVote=>[...productVote, data])
            setReviewInput("")
        } else {
            const data = {
                ratingName: nameInput,
                ratingDate: new Date().toString(),
                ratingText: reviewInput,
                ratingEmail: emailInput,
                ratingStar: ratingValue,
                ratingAvt: "http://pe.heromc.net:4000/images/16f9bbf512b66a228f7978e34d8fb163"
            }
            axios.post(`http://pe.heromc.net:4000/products/review/${product._id}`, data)
            setProductVote(productVote=>[...productVote, data])
            setReviewInput("")
        }
    } 

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
                            {productVote.length}
                        </span>
                    </div>
                </div>
                <div className="productreview-content">
                    {
                        props.tabId === 0 && 
                        <div className="productreview-text"> 
                            {product.productDes}
                        </div>
                    }
                    {
                        props.tabId === 1 && 
                        <div className="productreview-list"> 
                            {productVote.map((item, index) => {
                                const ratingStar = {
                                    size: 12,
                                    value: item.ratingStar,
                                    edit: false,
                                    activeColor: "#fda32a",
                                    color: "#ddd",
                                    isHalf: true
                                }
                                const date = new Date(item.ratingDate)
                                const day = date.getDate()
                                const month = date.getMonth() + 1
                                const year = date.getFullYear()
                                return (
                                    <div 
                                        className="productreview-item flex"
                                        key={index}
                                        >
                                        <div className="reviewer">
                                            <img src={item.ratingAvt} width="100%" height="100%" alt=""></img>
                                        </div>
                                        <div className="review-info">
                                            <div className="review-first flex">
                                                <div className="reviewer-name">{item.ratingName}</div>
                                                <div className="reviewer-ratingStar">
                                                    <ReactStars {...ratingStar} />
                                                </div>
                                            </div>
                                            <div className="review-second">
                                                {`${day}-${month}-${year}`}
                                            </div>
                                            <ProductReviewContent content={item.ratingText}/>
                                            {/* <div className="review-img flex">
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
                                            </div> */}
                                            {/* <div className="review-like">
                                                <FontAwesomeIcon icon={faThumbsUp} className="mr-5"></FontAwesomeIcon>
                                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                            </div> */}
                                        </div>
                                        <div className="productreview-line"></div>
                                    </div>
                                )
                            })} 
                            <div className="productreview-review">
                                <div>Add A Review</div>
                                <div style={{ color: "#888", textAlign: 'left', fontSize: '12px', marginBottom: '20px'}}>Your email address will not be published. Required fields are marked *</div>
                                <div style={{ color: "#888", fontSize: '14px', marginBottom: '10px'}}>Your rating *</div>
                                <ReactStars {...defaultStar}/>
                                <form className="review-form" onSubmit={sendReview}>
                                    <p className="review-form-title">Your review *</p>
                                    <input 
                                        type="text" 
                                        className="w-100 no-outline" 
                                        name="reviewText"
                                        value={reviewInput}
                                        onChange={(event)=>{
                                            setReviewInput(event.target.value)
                                        }}
                                    ></input>
                                    <div className="flex w-100">
                                        <div className="w-100 mr-2">
                                            <p className="review-form-title">Name *</p>
                                            <input 
                                                type="text" 
                                                className="w-100 no-outline" 
                                                name="reviewName"
                                                onChange={(event)=>{
                                                    setNameInput(event.target.value)
                                                }}
                                                value={nameInput}
                                            ></input>
                                        </div>
                                        <div className="w-100 ml-2">
                                            <p className="review-form-title">Email *</p>
                                            <input 
                                                type="email" 
                                                className="w-100 no-outline" 
                                                name="reviewEmail"
                                                onChange={(event)=>{
                                                    setEmailInput(event.target.value)
                                                }}
                                                value={emailInput}
                                            ></input>
                                        </div>
                                    </div>
                                    <button className="submit-btn btn">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="product-info-line"></div>
        </div>
    )
}
