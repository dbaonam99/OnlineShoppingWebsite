import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/User';
import '../Styles/BannerV4.css'
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'
import socketIOClient from "socket.io-client"
import { ZaloPay } from './ZaloPay/zalopay';
import QRCode from 'qrcode.react'
import { APIs } from './ZaloPay/common';
import $ from 'jquery';  

const ENDPOINT = "http://pe.heromc.net:4000";

function CheckoutBody(props) {
    
    const [tinh, setTinh] = useState([])
    const [huyen, setHuyen] = useState([])
    const { 
        userInfo
    } = useContext(UserContext);
    const socket = socketIOClient(ENDPOINT)

    const [nameInput, setNameInput] = useState("")
    const [_id, set_Id] = useState("")
    const [userAvt, setUserAvt] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [provinceId, setProvinceId] = useState("")
    const [userTinh, setUserTinh] = useState(null)
    const [userHuyen, setUserHuyen] = useState(null)
    const [addressInput, setAddressInput] = useState(null)
    const [cartList, setCartList] = useState([])
    const subTotal = localStorage.getItem('total')
    const [shipping, setShipping] = useState(0)
    const total = Number(subTotal) + Number(shipping)
    const [confirm, setConfirm] = useState(false)
    const [orderPaymentMethod, setOrderPaymentMethod] = useState("")
    const [orderAddressConfirm, setOrderAddressConfirm] = useState("")
    const [isShowQR, setIsShowQR] = useState(false)
    const [qrValue, setQRValue] = useState("")
    const [isPaid, setIsPaid] = useState(false) 

    useEffect(()=>{
        if (userInfo) {
            setUserAvt(userInfo.userAvt)
            set_Id(userInfo._id)
            setNameInput(userInfo.userName)
            setEmailInput(userInfo.userEmail)
            setPhoneInput(userInfo.userPhone)
            setAddressInput(userInfo.userAddress)
            if (userInfo.userTinh !== "") {
                axios.get(`http://pe.heromc.net:4000/vietnam`)
                    .then(res => {
                        setTinh(res.data[0].tinh)
                        setHuyen(res.data[0].huyen)
                        res.data[0].tinh.filter((item)=>{ 
                            if (userInfo.userTinh === item.name) {
                                setProvinceId(item.id)
                            }
                            return null
                        })
                    }
                )  
                setUserTinh(userInfo.userTinh)
            } else {
                axios.get(`http://pe.heromc.net:4000/vietnam`)
                    .then(res => {
                        setTinh(res.data[0].tinh)
                        setHuyen(res.data[0].huyen) 
                    }
                )   
            }
            if (userInfo.userHuyen !== "") {
                setUserHuyen(userInfo.userHuyen)
            }
        }
        setCartList((JSON.parse(localStorage.getItem('cart'))))
    },[userInfo])  

    const [methodPayment, setMethodPayMent] = useState(0)

    const checkedPayMent = (event) => {
        setMethodPayMent(Number(event.target.id))
    } 

    const showQR = (text) => {
        setIsShowQR(true) 
        setQRValue(text)
    } 

    const placeAnOrder = () => {
        let orderPaymentMethod2 = "";
        if (methodPayment === 1) {
            orderPaymentMethod2 = "cash on delivery"
        } else if (methodPayment === 2) {
            orderPaymentMethod2 = "zalopay"
        } else {
            orderPaymentMethod2 = ""
        }
        var cartId = []
        for (let i in cartList) {
            cartId.push(
                {
                    id: cartList[i]._id,
                    amount: cartList[i].count 
                }
            )
        }

        const data = {
            orderName: nameInput,
            orderAvatar: userAvt,
            orderEmail: emailInput,
            orderPhone: phoneInput,
            orderAddress: addressInput,
            orderTinh: userTinh,
            orderHuyen: userHuyen,
            orderList: cartId,
            orderTotal: total,
            orderPaymentMethod: orderPaymentMethod2,
            orderDate: new Date()
        }
        
        if (orderPaymentMethod2 === "") {
            alert("Fill in all infomation please")
        } else if (orderPaymentMethod2 === "zalopay") {
            if (isPaid === false) {
                alert("Your payment not yet confirmed!")
                return
            } else {
                axios.post('http://pe.heromc.net:4000/order', data)
                setTimeout(()=>{ 
                    setConfirm(true)
                    document.body.style.overflow = 'hidden';
                    window.scrollTo(0,0);
                    socket.emit('placeAnOrder', data)
                }, 1000)
            }
        } else {
            axios.post('http://pe.heromc.net:4000/order', data)
            setTimeout(()=>{ 
                setConfirm(true)
                document.body.style.overflow = 'hidden';
                window.scrollTo(0,0);
                socket.emit('placeAnOrder', data)
            }, 1000)
        }
        setOrderPaymentMethod(orderPaymentMethod2)
        let addressStr = addressInput + ', ' + userTinh + ', ' + userHuyen 
        setOrderAddressConfirm(addressStr)
    }

    return(
        <div className="CheckoutBody">
            {
                confirm &&
                <div className="billing-detail confirmPage">
                    <p style={{fontSize: '18px', color: 'green', marginBottom: '30px'}}>Thank you. Your order has been received.</p> 
                    <div className="billing-detail-title">Order details</div>
                    <div> 
                        <div className="billing-detail-list comfirm-list">
                            { cartList &&
                                cartList.map((item, index)=>{
                                    return (
                                        <div 
                                            key={index}
                                            className="billing-detail-item"
                                        >
                                            <div
                                                style={{width: '300px'}}
                                            >
                                                <img src={item.productImg[0]} alt="" width="60px" height="60px"></img>
                                            </div>
                                            <div className="billing-detail-mobile">
                                                <div className="billing-detail-name">{item.productName}</div>
                                                <div className="billing-detail-count">
                                                    <p>x</p>
                                                    {item.count}
                                                </div>
                                                <div className="billing-detail-price">{(item.productFinalPrice * item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                                            </div>
                                        </div>
                                    )
                                }) 
                            }
                            <div className="billing-detail-item flex">
                                <div className="billing-confirm-left">SUBTOTAL</div>
                                <div className="billing-detail-mobile">
                                    <div className="billing-detail-name"></div>
                                    <div className="billing-detail-count" style={{color: '#111'}}></div>
                                    {subTotal &&
                                        <div className="billing-detail-price billing-confirm-right">{subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                                    }
                                </div>
                            </div>
                            <div 
                                className="billing-detail-item flex"
                                style={{justifyContent: 'space-between'}}
                            >
                                <div className="billing-confirm-left">ADDRESS</div><div className="billing-detail-mobile">
                                    <div className="billing-detail-name"></div>
                                    <div className="billing-detail-count" style={{color: '#111'}}></div>
                                    <div className="billing-detail-price billing-confirm-right orderAddressConfirm" style={{textTransform: 'capitalize'}}>{orderAddressConfirm} đ</div>
                                </div>
                            </div>
                            <div className="billing-detail-item flex">
                                <div className="billing-confirm-left">SHIPPING FEE</div>
                                <div className="billing-detail-mobile">
                                    <div className="billing-detail-name"></div>
                                    <div className="billing-detail-count" style={{color: '#111'}}></div>
                                    <div className="billing-detail-price billing-confirm-right" style={{textTransform: 'capitalize'}}>{shipping} đ</div>
                                </div>
                            </div>
                            <div className="billing-detail-item flex">
                                <div className="billing-confirm-left">TOTAL</div>
                                <div className="billing-detail-mobile">
                                    <div className="billing-detail-name"></div>
                                    <div className="billing-detail-count" style={{color: '#111'}}></div> 
                                    <div className="billing-detail-price billing-confirm-right">{(Number(subTotal) + Number(shipping)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                                </div>
                            </div> 
                            <div className="billing-detail-item flex">
                                <div className="billing-confirm-left">PAYMENT METHOD</div>
                                <div className="billing-detail-mobile">
                                    <div className="billing-detail-name"></div>
                                    <div className="billing-detail-count" style={{color: '#111'}}></div>
                                    <div className="billing-detail-price billing-confirm-right" style={{textTransform: 'capitalize'}}>{orderPaymentMethod}</div>
                                </div>
                            </div>
                            <div className="order-btn btn" style={{marginTop: '30px', marginBottom: '30px'}} onClick={()=>{
                                document.body.style.overflow = 'unset';
                                localStorage.removeItem('total')
                                localStorage.removeItem('cart') 
                                props.history.push("/shop")
                                window.location.reload(false);
                            }}>
                                CONFIRM
                            </div>
                        </div>
                    </div>
                </div>
            } 
            <div className="billing-detail">
                <div className="billing-detail-title">Billing details</div>
                <form className="billing-detail-form"> 
                    <table className="billing-detail-table"> 
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="name" 
                                        value={nameInput}
                                        onChange={(event)=>{
                                            setNameInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Phone number</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="phone" 
                                        value={phoneInput}
                                        onChange={(event)=>{
                                            setPhoneInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="phone" 
                                        value={emailInput}
                                        onChange={(event)=>{
                                            setEmailInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>Province</td>
                                <td>
                                    <select 
                                        className="input"
                                        value={userTinh || ''}
                                        onChange={(event)=>{
                                            setProvinceId(event.target.selectedIndex)
                                            setUserTinh(event.target.value)
                                        }}
                                    >
                                        <option disabled defaultValue>select a province</option>
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
                                        value={userHuyen || ''}
                                        onChange={(event)=>{
                                            setUserHuyen(event.target.value)
                                        }}
                                    >
                                        <option disabled defaultValue>select a district</option>
                                        {huyen.map((item, index) => {
                                            if (item.tinh_id === provinceId) {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.name}
                                                        >{item.name}</option>
                                                )
                                            }
                                            return null
                                        })}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    <input 
                                        type="text"
                                        className="input"
                                        name="address" 
                                        value={addressInput || ''}
                                        onChange={(event)=>{
                                            setAddressInput(event.target.value)
                                        }}
                                    ></input>
                                </td>
                            </tr>
                            
                                
                        </tbody>
                    </table>
                </form>
            </div> 
            <div className="billing-detail">
                <div className="billing-detail-title">Your order</div>
                <div className="billing-detail-form"> 
                    <div className="billing-detail-list">
                        { cartList &&
                            cartList.map((item, index)=>{
                                return (
                                    <div 
                                        key={index}
                                        className="billing-detail-item"
                                    >
                                        <img src={item.productImg[0]} alt="" width="60px" height="60px"></img>
                                        <div className="billing-detail-mobile">
                                            <div className="billing-detail-name">{item.productName}</div>
                                            <div className="billing-detail-count">
                                                <p>x</p>
                                                {item.count}
                                            </div>
                                            <div className="billing-detail-price">{(item.productFinalPrice * item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                        <div className="billing-detail-item flex">
                            <div style={{width:'60px', height: '60px', lineHeight: '60px', fontSize: '18px'}}>SUBTOTAL</div>
                            <div className="billing-detail-mobile">
                                <div className="billing-detail-name"></div>
                                <div className="billing-detail-count" style={{color: '#111'}}></div>
                                { subTotal &&
                                    <div className="billing-detail-price">{subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                                }
                            </div>
                        </div>
                        <div 
                            className="billing-detail-item flex"
                            style={{justifyContent: 'space-between'}}
                        >
                            <div style={{width:'60px', height: '60px', lineHeight: '60px', fontSize: '18px'}}>SHIPPING</div>
                            <div className="billing-detail-shipping">
                                <select onChange={(event)=>{
                                    setShipping(event.target.value)
                                }}>
                                    <option value="0">FREESHIP - 0đ</option>
                                    <option value="30000">FAST SHIPPING - 30000đ</option>
                                </select>
                            </div>
                        </div>
                        <div className="billing-detail-item flex">
                            <div style={{width:'60px', height: '60px', lineHeight: '60px', fontSize: '18px'}}>TOTAL</div>
                            <div className="billing-detail-mobile">
                                <div className="billing-detail-name"></div>
                                <div className="billing-detail-count" style={{color: '#111'}}></div>
                                <div className="billing-detail-price">{(Number(subTotal) + Number(shipping)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</div>
                            </div>
                        </div>
                        <div className="billing-detail-payment">
                            <div style={{fontSize: '18px'}}>PAYMENT METHOD</div>
                            <div className="billing-detail-mobile">
                                <div className="payment-method-list">
                                    <div 
                                        id="1"
                                        className="flex payment-method-item" 
                                        onClick={(event)=>{
                                            checkedPayMent(event)
                                            setIsShowQR(false)
                                        }}>
                                        <div 
                                            id="1"
                                            className={methodPayment === 1 ? "size-check isChecked2" : "size-check"}
                                            ></div>
                                            <p
                                                id="1"
                                                >CASH ON DELIVERY</p>
                                        </div>
                                    <div 
                                        id="2"
                                        className="flex payment-method-item"
                                        onClick={(event)=>{
                                            checkedPayMent(event) 
                                            const description = `Thanh toan don hang #${_id}` 
                                            let order = {
                                                description: description,
                                                amount: total
                                            }  
                                            ZaloPay.qr(order, res => { 
                                                showQR(res.orderurl); 
                                                const check = setInterval(()=>{  
                                                    $.getJSON(APIs.GETORDERSTATUS +'?morderid='+ res.apptransid)
                                                        .done(res => {  
                                                            if (res.returncode === 1) { 
                                                                setIsPaid(true)
                                                                clearInterval(check)
                                                            }
                                                        }
                                                    ) 
                                                }, 1000)  
                                            });  
                                        }}>
                                        <div 
                                            id="2"
                                            className={methodPayment === 2 ? "size-check isChecked2" : "size-check"} ></div>
                                        <p
                                            id="2">
                                            ZALOPAY
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className={isShowQR ? "qr-box flex-col" : "d-none"}> 
                            <div className="qr-code-box flex-center">
                                <QRCode value={qrValue}></QRCode> 
                            </div> 
                            { !isPaid &&
                                <div className="qr-status" style={{color: "red"}}>
                                    Đang chờ thanh toán...
                                </div>
                            }
                            { isPaid &&
                                <div className="qr-status">
                                    Thanh toán thành công!
                                </div>
                            }
                            { !isPaid && 
                                <div className="qr-help">
                                    <div className="qr-help-title">Hướng dẫn thanh toán</div>
                                    <ul className="qr-help-list">
                                        <li><span>Bước 1:</span><strong> Mở</strong> ứng dụng <strong>ZaloPay</strong></li>
                                        <li><span>Bước 2:</span> Chọn <strong>"Thanh Toán"</strong> và quét mã QR</li>
                                        <li><span>Bước 3:</span> <strong> Xác nhận thanh toán</strong> ở trong ứng dụng</li>
                                    </ul>
                                </div>
                            }
                        </div> 
                        <div className="order-btn btn" onClick={placeAnOrder}>
                            PLACE AN ORDER
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default withRouter(CheckoutBody)