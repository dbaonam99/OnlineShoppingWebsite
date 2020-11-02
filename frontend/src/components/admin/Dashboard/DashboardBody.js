import React, { useEffect, useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import DashboardHeader from './DashboardHeader'
import DashboardMain from './Main/DashboardMain';
import classNames from 'classnames'
import DashboardInbox from './Inbox/DashboardInbox';
import DashboardProduct from './Product/DashboardProduct';
import DashboardNews from './News/DashboardNews';
import DashboardProductEdit from './Modal/DashboardProductEdit';
import DashboardProductCreate from './Modal/DashboardProductCreate';
import Axios from 'axios';
import DashboardNewsCreate from './Modal/DashboardNewsCreate';

export default function DashboardBody(props) {

    const tabId = props.tabId;
    const [toast, setToast] = useState(false)
    const [isChange, setIsChange] = useState(false)
    const [product, setProduct] = useState({})

    const setToastFunc = (bool) => {
        setIsChange(true)
        setTimeout(()=>{
            setIsChange(false)
        }, 100)
        setToast(true)
        setTimeout(()=>{
            setToast(false)
        }, 3000)
    }
    
    useEffect(()=> {
        Axios.get(`http://localhost:4000/products/${props.productId}`)
            .then(res => {
                setProduct(res.data)
            } 
        )
    },[props.productId, props.openEdit])

    return (
        <div 
            className={classNames("DashboardBody", {
                DashboardBody_small: !props.openMenu
            })}>
            { (props.openCreate && tabId === "4") &&
                <DashboardProductCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            { (props.openEdit && tabId === "4") &&
                <DashboardProductEdit
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    product={product}
                />
            }
            { (props.openCreate && tabId === "5") &&
                <DashboardNewsCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}
                />
            }
            {/* { (props.openEdit && tabId === "5") &&
                <DashboardNewsE
                    setCloseEditFunc={props.setCloseEditFunc}
                    setToastFunc={setToastFunc}
                    product={product}
                />
            } */}
            <DashboardHeader
                itemName= {props.menuItems[tabId-1].name}
                setOpenMenuOnClick = {props.setOpenMenuOnClick}
                openMenu = {props.openMenu}
            />
            {
                tabId === "1" && <DashboardMain/>
            }
            {
                tabId === "2" && <DashboardInbox/>
            }
            {
                tabId === "3" && <div>tab 3</div>
            }
            {
                tabId === "4" && 
                <DashboardProduct
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
            {
                tabId === "5" && 
                <DashboardNews
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}
                />
            }
            {
                tabId === "6" && <div>tab 6</div>
            }
            {
                tabId === "7" && <div>tab 7</div>
            }
        </div>
    )
}