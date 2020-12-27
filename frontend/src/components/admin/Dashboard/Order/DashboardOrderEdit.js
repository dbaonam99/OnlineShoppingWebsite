import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardOrderCreate(props) {

    const createForm = useRef();

    const [tinh, setTinh] = useState([])
    const [huyen, setHuyen] = useState([])

    const [orderName, setOrderName] = useState("")
    const [orderEmail, setOrderEmail] = useState("")
    const [orderPhone, setOrderPhone] = useState("")
    const [orderAddress, setOrderAddress] = useState("")
    const [orderProvince, setOrderProvince] = useState(null)
    const [orderDistric, setOrderDistric] = useState(null)
    const [orderPaymentMethod, setOrderPaymentMethod] = useState("")
    const [provinceId, setProvinceId] = useState("")
    const [product, setProduct] = useState([])
    const [productList, setProductList] = useState([])

    const [userList, setUserList] = useState([])
    const [user, setUser] = useState("")
    const [chooseUser, setChooseUser] = useState(false)
    const order = props.order

    useEffect(()=>{
        if (chooseUser === false) {
            axios.get(`http://pe.heromc.net:4000/vietnam`)
                .then(res => {
                    setTinh(res.data[0].tinh)
                    setHuyen(res.data[0].huyen)
                    if (order) {
                        setOrderName(order.orderName)
                        setOrderEmail(order.orderEmail)
                        setOrderPhone(order.orderPhone)
                        setOrderAddress(order.orderAddress)
                        setOrderProvince(order.orderTinh)
                        setOrderDistric(order.orderHuyen)
                        setOrderPaymentMethod(order.orderPaymentMethod)
                        if(typeof order.orderList !== "undefined") {
                            order.orderList.map((item)=>{
                                axios.get(`http://pe.heromc.net:4000/products/${item.id}`)
                                    .then(res => {
                                        res.data.count = item.amount
                                        setProductList(productList => [...productList, res.data])
                                    })
                                return null
                            })
                            return
                        }
                        setOrderPaymentMethod(order.orderPaymentMethod)
                        if (order.orderTinh !== "") {
                            res.data[0].tinh.filter((item)=>{
                                if (order.orderTinh === item.name) {
                                    setProvinceId(item.id)
                                }
                                return null
                            })
                            setOrderProvince(order.orderTinh)
                        }
                        if (order.orderHuyen !== "") {
                            setOrderDistric(order.orderHuyen)
                        }
                    }
                }
            )
        } 
        axios.get(`http://pe.heromc.net:4000/products`)
            .then(res => {
                setProduct(res.data)
            }
        )
        axios.get(`http://pe.heromc.net:4000/users/list`)
            .then(res => {
                setUserList(res.data)
                res.data.filter((item)=>{
                    if (item.userEmail === user) {
                        setOrderName(item.userName)
                        setOrderEmail(item.userEmail)
                        setOrderPhone(item.userPhone)
                        setOrderProvince(item.userProvince)
                        setOrderDistric(item.userDistric)
                        setOrderAddress(item.userAddress)
                        if (item.userTinh !== "") {
                            tinh.filter((item2)=>{
                                if (item.userTinh === item2.name) {
                                    setProvinceId(item2.id)
                                }
                            })
                            setOrderProvince(item.userTinh)
                        }
                        if (item.userHuyen !== "") {
                            setOrderDistric(item.userHuyen)
                        }
                    }
                    return null
                })
            }
        )
    },[order, user])

    const onSubmit = (event) => {
        event.preventDefault()
        var listOrder = []
        var total = 0;
        for(let i in productList) {
            const data = {
                id: productList[i]._id,
                amount: productList[i].count,
            }
            total += productList[i].productFinalPrice * productList[i].count
            listOrder.push(data)
        }
        axios.post(`http://pe.heromc.net:4000/order/update/${order._id}`, {
            orderName: orderName,
            orderEmail: orderEmail,
            orderPhone: orderPhone,
            orderAddress: orderAddress,
            orderTinh: orderProvince,
            orderHuyen: orderDistric,
            orderList: listOrder,
            orderTotal: total,
            orderPaymentMethod: orderPaymentMethod,
            orderDate: new Date()
        }).then(()=>{
            props.setCloseEditFunc(false);
            props.setToastFunc(true);
        })
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box"> 
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Order infomation
                    </div>
                    <div  
                        className="create-box-title-close flex-center"
                        onClick={()=>{
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Already have an account?</div>
                        <div className="dashboard-right">
                            <select 
                                className="input"
                                onChange={(event)=>{
                                    setUser(event.target.value)
                                    setChooseUser(true)
                                }}
                            >
                                <option></option>
                                {
                                    userList.map((item,index)=>{
                                        return (
                                            <option
                                                key={index}
                                                value={item.userEmail}
                                            >{item.userEmail}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Name</div>
                        <div className="dashboard-right">
                            <input 
                                type="text" name="name" 
                                value={orderName || ""}
                                onChange={(event)=>{
                                    setOrderName(event.target.value)
                                }} required
                            ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Email</div>
                        <div className="dashboard-right">
                            <input 
                                type="text" name="email" 
                                value={orderEmail || ""}
                                onChange={(event)=>{
                                    setOrderEmail(event.target.value)
                                }} required
                                ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Phone</div>
                        <div className="dashboard-right">
                            <input 
                                type="text" name="phone" 
                                value={orderPhone || ""}
                                onChange={(event)=>{
                                    setOrderPhone(event.target.value)
                                }} required
                                ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Province</div>
                        <div className="dashboard-right">
                            <select 
                                className="input"
                                value={orderProvince}
                                onChange={(event)=>{
                                    setProvinceId(event.target.selectedIndex)
                                    setOrderProvince(event.target.value)
                                }}
                                >
                                <option disabled selected value>select a province</option>
                                {tinh.map((item, index) => {
                                    return (
                                        <option 
                                            key={index}
                                            value={item.name}
                                        >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">District</div>
                        <div className="dashboard-right">
                            <select 
                                className="input"
                                value={orderDistric}
                                onChange={(event)=>{
                                    setOrderDistric(event.target.value)
                                }}
                            >
                                <option disabled selected value>select a district</option>
                                {huyen.map((item, index) => {
                                    if (item.tinh_id === provinceId) {
                                        return (
                                            <option
                                                key={index}
                                                value={item.name}
                                            >{item.name}</option>
                                        )
                                    }
                                })}
                            </select>
                        </div>
                    </div>
            
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Address</div>
                        <div className="dashboard-right">
                            <input 
                                type="text" name="phone" 
                                value={orderAddress || ""}
                                onChange={(event)=>{
                                    setOrderAddress(event.target.value)
                                }} required
                                ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Items</div>
                        <div className="dashboard-right">
                            <select 
                                className="input"
                                style={{height: '25px', marginBottom: '10px'}}
                                value={""}
                                onChange={(event)=>{
                                    const isExists = (cartItems = [], item = {}) => {
                                        for (let cartItem of cartItems) {
                                            if (cartItem._id === item._id) {
                                                return cartItem;
                                            }
                                        }
                                        return false;
                                    }

                                    const value = event.target.value
                                    const virtualCart = [...productList] 
                                    if (productList.length === 0) {
                                        virtualCart.push({...JSON.parse(value), count: 1})
                                    } else {
                                        if (!isExists(productList, JSON.parse(value))) {
                                            virtualCart.push({...JSON.parse(value), count: 1})
                                        } else {
                                            for (let i = 0; i < virtualCart.length; i++) {
                                                if (virtualCart[i]._id === JSON.parse(value)._id) {
                                                    virtualCart[i].count += 1
                                                    break
                                                }
                                            }
                                        }
                                    }
                                    setProductList(virtualCart)
                                }}
                            >
                                <option selected value>select a product</option>
                                {product.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={JSON.stringify(item)}
                                        >Name: {item.productName}, Price: {item.productFinalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</option>
                                    )
                                })}
                            </select>
                            <div className="" style={{ overflowY: 'hidden', flexWrap:'wrap'}}>
                                { productList && 
                                    productList.map((item, index) => {
                                        return (
                                            <div 
                                                key={index}
                                                className="order-list-item"
                                            >
                                                <img src={item.productImg[0]} alt=""></img>
                                                <p style={{width: '55%'}}>{item.productName}</p>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <p 
                                                        id={index}
                                                        className="count-btn flex-center"
                                                        onClick={(event)=>{
                                                            const arr = [...productList]
                                                            const id = event.target.id;
                                                            for (let i in arr) {
                                                                if (id === i) {
                                                                    if (arr[i].count === 0) {
                                                                        return
                                                                    } else {
                                                                        arr[i].count -= 1
                                                                    }
                                                                }
                                                            }
                                                            setProductList(arr)
                                                        }}
                                                    >-</p>
                                                    <p>{item.count}</p>
                                                    <p 
                                                        id={index}
                                                        className="count-btn flex-center"
                                                        onClick={(event)=>{
                                                            const arr = [...productList]
                                                            const id = event.target.id;
                                                            for (let i in arr) {
                                                                if (id === i) {
                                                                    arr[i].count += 1
                                                                }
                                                            }
                                                            setProductList(arr)
                                                        }}
                                                    >+</p>
                                                </div>
                                                <div 
                                                    id={index}
                                                    className="delete-order-item flex-center"
                                                    onClick={(event)=>{
                                                        var arr = [];
                                                        const id = event.target.id;
                                                        for (let i in productList) {
                                                            if (i !== id) {
                                                                arr.push(productList[i])
                                                            }
                                                        }
                                                        setProductList(arr)
                                                    }}>
                                                    <FontAwesomeIcon style={{pointerEvents: 'none'}} icon={faTimes}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Payment method</div>
                        <div className="dashboard-right">
                            <select 
                                className="input"
                                type="text"
                                value={orderPaymentMethod || ""}
                                onChange={(event)=>{
                                    setOrderPaymentMethod(event.target.value)
                                }} required
                            >
                                <option></option>
                                <option value="cash on delivery">Cash On Delivery</option>
                                <option value="direct back transfer">Direct Back Transfer</option>
                                <option value="paypal">Paypal</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-center" style={{marginTop: '40px'}}>
                        <button className="create-box-btn btn">
                            Create order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}