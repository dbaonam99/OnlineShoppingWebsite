import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/User';
import '../Styles/BannerV4.css'
import axios from 'axios'
import {
    withRouter
} from 'react-router-dom'
import socketIOClient from "socket.io-client"
const ENDPOINT = "http://pe.heromc.net:4000";

function CheckoutBody(props) {
    
    const [tinh, setTinh] = useState([])
    const [huyen, setHuyen] = useState([])
    const { 
        userInfo
    } = useContext(UserContext);
    const socket = socketIOClient(ENDPOINT)

    const [nameInput, setNameInput] = useState("")
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

    useEffect(()=>{
        if (userInfo) {
            setUserAvt(userInfo.userAvt)
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

    const placeAnOrder = () => {
        let orderPaymentMethod2 = "";
        if (methodPayment === 1) {
            orderPaymentMethod2 = "cash on delivery"
        } else if (methodPayment === 2) {
            orderPaymentMethod2 = "direct back transfer"
        } else if (methodPayment === 3) {
            orderPaymentMethod2 = "paypal"
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
        if (orderPaymentMethod2 === "") {
            alert("Fill in all infomation please")
        } else {
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
                            <div className="order-btn btn" style={{marginTop: '30px'}} onClick={()=>{
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
                                        onClick={checkedPayMent}>
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
                                        onClick={checkedPayMent}>
                                        <div 
                                            id="2"
                                            className={methodPayment === 2 ? "size-check isChecked2" : "size-check"} ></div>
                                        <p
                                            id="2">
                                            DIRECT BANK TRANSFER
                                        </p>
                                    </div>
                                    <div 
                                        id="3"
                                        className="flex payment-method-item"
                                        onClick={checkedPayMent}>
                                        <div 
                                            id="3"
                                            className={methodPayment === 3 ? "size-check isChecked2" : "size-check"} ></div>
                                        <p
                                            id="3"
                                            >PAYPAL</p>
                                    </div>
                                </div>
                            </div>
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