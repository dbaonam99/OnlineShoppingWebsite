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
    const [orderList, setOrderList] = useState([])
    const [provinceId, setProvinceId] = useState("")
    const [product, setProduct] = useState([])
    const [productValue, setProductValue] = useState(null)
    const [productList, setProductList] = useState([])
    

    const onSubmit = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const formData = new FormData();

        formData.append("orderName", orderName);
        formData.append("orderEmail", orderEmail);
        formData.append("orderPhone", orderPhone);
        formData.append("orderAddress", orderAddress);
        formData.append("orderTinh", orderProvince);
        formData.append("orderHuyen", orderDistric);
        formData.append("orderPaymentMethod", orderPaymentMethod);
        formData.append("orderDate", new Date());
        formData.append("orderList", orderList);
        // formData.append("orderTotal", total);
        
        axios.post('http://localhost:4000/order', formData, config)

        // props.setCloseCreateFunc(false);
        // props.setToastFunc(true);
    }

    const [userList, setUserList] = useState([])
    const [user, setUser] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:4000/users/list`)
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
                })
            }
        )
        axios.get(`http://localhost:4000/vietnam`)
            .then(res => {
                setTinh(res.data[0].tinh)
                setHuyen(res.data[0].huyen)
            }
        )
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProduct(res.data)
            }
        )
        if (user === "") {
            setOrderName("")
            setOrderEmail("")
            setOrderPhone("")
            setOrderAddress("")
            setOrderProvince("")
            setProvinceId("")
        }
    },[user])

    console.log(productList)

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
                            props.setCloseCreateFunc(false);
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
                                value={"orderDistric"}
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
                                value={productValue}
                                onChange={(event)=>{
                                    const value = event.target.value
                                    setProductValue(value)
                                    setProductList(productList=>[...productList, JSON.parse(value)])
                                }}
                            >
                                <option disabled selected value>select a product</option>
                                {product.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={JSON.stringify(item)}
                                        >Name: {item.productName}, Price: {item.productPrice}</option>
                                    )
                                })}
                            </select>
                            <div className="flex" style={{ overflowY: 'hidden', flexWrap:'wrap'}}>
                                { productList && 
                                    productList.map((item, index) => {
                                        return (
                                            <div key={index} className="create-box-img">
                                                <img src={item.productImg} alt=""></img>
                                                <div 
                                                    className="create-box-img-overlay"
                                                >
                                                    <p
                                                        // onClick={deleteImg}
                                                        className="icon">X
                                                    </p>
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
                            <input 
                                type="text" name="phone" 
                                value={orderPaymentMethod || ""}
                                onChange={(event)=>{
                                    setOrderPaymentMethod(event.target.value)
                                }} required
                                ></input>
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