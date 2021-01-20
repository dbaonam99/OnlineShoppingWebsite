import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { faFileInvoice, faMoneyBillWave, faStar, faTasks, faTshirt, faUser } from '@fortawesome/free-solid-svg-icons'
import DashboardTotalCount from './DashboardTotalCount'
import DashboardLocation from './DashboardLocation'
import DashboardTopFive from './DashboardTopFive'
import DashboardRecentReview from './DashboardRecentReview'
import axios from 'axios'
import DashboardChart from './DashboardChart'
import DashboardTodoList from './DashboardTodoList'
import DashboardChartPie from './DashboardChartPie'
import DashboardChartLine from './DashboardChartLine'

export default function DashboardMain() {

    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [email, setEmail] = useState([]);
    const [user, setUser] = useState([]);
    const [topCustomer, setTopCusomer] = useState([]);
    const [topProductSales, setTopProductSales] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalSale, setTotalSale] = useState(0);
    const [orderMonthPercent, setOrderMonthPercent] = useState({})
    const [saleMonthPercent, setSaleMonthPercent] = useState({})
    const [incomeMonthPercent, setIncomeMonthPercent] = useState({}) 

    useEffect(()=>{
        axios.get(`http://pe.heromc.net:4000/products`)
            .then(res => {
                setProducts(res.data)
                let virtualProducts = [...res.data]
                virtualProducts.sort((a,b) =>  b.productSold - a.productSold)
                let virtualProducts2 = []
                for (let i in virtualProducts) {
                    let data = {
                        ...virtualProducts[i],
                        count: virtualProducts[i].productSold
                    }
                    virtualProducts2.push(data)
                }
                setTopProductSales(virtualProducts2)
            }
        )
        axios.get(`http://pe.heromc.net:4000/users/list`)
            .then(res => {
                setUser(res.data)
            }
        ) 
        axios.get(`http://pe.heromc.net:4000/email`)
            .then(res => {
                setEmail(res.data)
            }
        ) 
        axios.get(`http://pe.heromc.net:4000/order`)
            .then(res => {
                setOrder(res.data)
                const topCustomer2 = Object.values(res.data.reduce((a, {orderEmail, orderName, orderTotal, orderAvatar}) => {
                    a[orderEmail] = a[orderEmail] || {orderEmail, orderName, orderAvatar, orderTotal, count: 0};
                    a[orderEmail].count++;
                    return a;
                }, Object.create(null)));
                topCustomer2.sort((a,b) =>  b.count - a.count)
                setTopCusomer(topCustomer2)

                var totalIncome = 0;
                var totalSale = 0;
                for(let i in res.data) {
                    for(let j in res.data[i].orderList) {
                        totalSale += res.data[i].orderList[j].amount
                    }
                    totalIncome += res.data[i].orderTotal
                }
                setTotalSale(totalSale)
                setTotalIncome(totalIncome) 

                const currentMonth = new Date().getMonth() + 1
                const currentYear = new Date().getFullYear()
                let lastYear = new Date().getFullYear()
                let lastMonth = 0
                if (currentMonth === 1) {
                    lastMonth = 12
                    lastYear = currentYear - 1
                } else {
                    lastMonth = currentMonth - 1
                    lastYear = currentYear
                }
                const currentOrder = []
                const lastMonthOrder = []
                let currentTotalIncome = 0;
                let currentTotalSale = 0;
                let lastCurrentTotalIncome = 0;
                let lastCurrentTotalSale = 0;
                for (let i in res.data) {
                    if (new Date(res.data[i].orderDate).getMonth()+1 === currentMonth &&
                        new Date(res.data[i].orderDate).getFullYear() === currentYear) {
                        currentOrder.push(res.data[i]) 
                        currentTotalIncome += res.data[i].orderTotal
                    } 
                    if (new Date(res.data[i].orderDate).getMonth()+1 === lastMonth &&
                        new Date(res.data[i].orderDate).getFullYear() === lastYear) {
                        lastMonthOrder.push(res.data[i]) 
                        lastCurrentTotalIncome += res.data[i].orderTotal
                    }
                    for(let j in res.data[i].orderList) {
                        if (new Date(res.data[i].orderDate).getMonth()+1 === currentMonth &&
                            new Date(res.data[i].orderDate).getFullYear() === currentYear) { 
                            currentTotalSale += res.data[i].orderList[j].amount 
                        } 
                        if (new Date(res.data[i].orderDate).getMonth()+1 === lastMonth &&
                            new Date(res.data[i].orderDate).getFullYear() === lastYear) { 
                            lastCurrentTotalSale += res.data[i].orderList[j].amount 
                        }
                    }
                }   

                if (currentOrder.length >= lastMonthOrder.length) {
                    setOrderMonthPercent({
                        percent: Math.ceil(((currentOrder.length - lastMonthOrder.length)/lastMonthOrder.length) * 100),
                        isDecrease: true
                    })
                } else { 
                    setOrderMonthPercent({
                        percent: Math.ceil(((lastMonthOrder.length - currentOrder.length)/lastMonthOrder.length) * 100),
                        isDecrease: false
                    })
                }
                if (currentTotalSale >= lastCurrentTotalSale) {
                    setSaleMonthPercent({
                        percent: Math.ceil(((currentTotalSale - lastCurrentTotalSale)/lastCurrentTotalSale) * 100),
                        isDecrease: true
                    })
                } else { 
                    setSaleMonthPercent({
                        percent: Math.ceil(((lastCurrentTotalSale - currentTotalSale)/lastCurrentTotalSale) * 100),
                        isDecrease: false
                    })
                }
                if (currentTotalIncome >= lastCurrentTotalIncome) {
                    setIncomeMonthPercent({
                        percent: Math.ceil(((currentTotalIncome - lastCurrentTotalIncome)/lastCurrentTotalIncome) * 100),
                        isDecrease: true
                    })
                } else { 
                    setIncomeMonthPercent({
                        percent: Math.ceil(((lastCurrentTotalIncome - currentTotalIncome)/lastCurrentTotalIncome) * 100),
                        isDecrease: false
                    })
                }
            }
        ) 
    }, []) 

    const totalCount = [
        {
            id: 1,
            title: "Total orders",
            count: order.length,
            percent: orderMonthPercent.percent,
            isDecrease: orderMonthPercent.isDecrease,
            color: "orange",
            icon: faFileInvoice
        },
        {
            id: 2,
            title: "Total sales",
            count: `${totalSale}`,
            percent: saleMonthPercent.percent,
            isDecrease: saleMonthPercent.isDecrease,
            color: "pink",
            icon: faTshirt
        },
        {
            id: 3,
            title: "Income",
            count: `${totalIncome}đ`,
            percent: incomeMonthPercent.percent,
            isDecrease: incomeMonthPercent.isDecrease,
            color: "green",
            icon: faMoneyBillWave
        },
        {
            id: 4,
            title: "Users",
            count: user.length,
            percent: 20,
            isDecrease: true,
            color: "lightblue",
            icon: faUser
        },
    ]

    const recentVote = [];
    if (products.length > 0) {
        for (let i = 0; i < products.length; i++) {
            const productVote = products[i].productVote;
            for (let j = 0; j < productVote.length; j++) {
                const newRatingDate = new Date(productVote[j].ratingDate);
                productVote[j].productName = products[i].productName;
                if (newRatingDate.getDate() === new Date().getDate()) {
                    let hours = newRatingDate.getHours().toString();
                    let minutes = newRatingDate.getMinutes().toString();
                    if (hours < 10) {
                        hours = "0" + hours
                    }
                    if (minutes < 10) {
                        minutes = "0" + minutes
                    }
                    productVote[j].ratingHours = hours;
                    productVote[j].ratingMinutes = minutes;
                } else {
                    let days = newRatingDate.getDate().toString();
                    let months = (newRatingDate.getMonth()+1).toString();
                    if (days < 10) {
                        days = "0" + days
                    }
                    if (months < 10) {
                        months = "0" + months
                    }
                    productVote[j].ratingDays = days;
                    productVote[j].ratingMonths = months;
                    productVote[j].ratingYears = newRatingDate.getFullYear().toString();
                }
                recentVote.push(productVote[j])
            }
        }
    }

    if (recentVote) {
        recentVote.sort(function(a,b){
            return new Date(b.ratingDate) - new Date(a.ratingDate);
        });
    }

    const topRecentVote = recentVote.splice(0,5)
    
    return (
        <div className="dashboard-main">
            <div className="row flex">
                { totalCount.map((item, index)=> { 
                    return (
                        <DashboardTotalCount
                            key = {index}
                            item = {item}
                        />
                    )
                })}
            </div>
            <DashboardLocation
                order={order}
            />
            <div className="row flex">
                <DashboardTopFive
                    icon = {faUser}
                    title = "Top customers by orders"
                    color = "lightblue"
                    data = {topCustomer}
                    table = {[
                        {
                            title: 'User name'
                        },
                        {
                            title: 'Total orders'
                        },
                    ]}
                />
                <DashboardTopFive
                    icon = {faTshirt}
                    title = "Top products by selling"
                    color = "pink"
                    data = {topProductSales}
                    table = {[
                        {
                            title: 'Product name'
                        },
                        {
                            title: 'Total sales'
                        },
                    ]}
                />
            </div>
            <div className="row flex">
                <DashboardChartPie
                    email = {email}
                    color = "pink"
                />
                <DashboardChart
                    products = {products}
                    order = {order}
                    color = "lightblue"
                />
            </div>
            <div className="row flex">
                <DashboardRecentReview
                    icon = {faStar}
                    title = "Recent Reviews"
                    color = "orange"
                    topRecentVote = {topRecentVote}
                />
                <DashboardTodoList // recent orders
                    icon = {faTasks}
                    title = "Todo list"
                    color = "green"
                />
            </div>
            <div className="row flex">
                <DashboardChartLine
                    icon = {faTasks}
                    order = {order}
                    color = "pink"
                />
            </div>
        </div>
    )
}