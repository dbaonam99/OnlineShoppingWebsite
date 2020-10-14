import React, { useEffect, useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { faFileInvoice, faMoneyBillWave, faStar, faTshirt, faUser } from '@fortawesome/free-solid-svg-icons'
import DashboardTotalCount from './DashboardTotalCount'
import DashboardLocation from './DashboardLocation'
import DashboardTopFive from './DashboardTopFive'
import DashboardRecentReview from './DashboardRecentReview'
import axios from 'axios'
import DashboardTaskList from './DashboardTaskList'

export default function DashboardMain() {

    const totalCount = [
        {
            id: 1,
            title: "Total orders",
            count: "3200",
            percent: 12,
            color: "orange",
            icon: faFileInvoice
        },
        {
            id: 2,
            title: "Total sales",
            count: "$120 000",
            percent: 20,
            color: "pink",
            icon: faTshirt
        },
        {
            id: 3,
            title: "Income",
            count: "$30 000",
            percent: 30,
            color: "green",
            icon: faMoneyBillWave
        },
        {
            id: 4,
            title: "Customers",
            count: "1200",
            percent: 5,
            color: "lightblue",
            icon: faUser
        },
    ]
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:4000/products`)
            .then(res => {
                setProducts(res.data)
            }
        )
    }, [])

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
                    let days = newRatingDate.getDay().toString();
                    let months = newRatingDate.getMonth().toString();
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
                            icon = {item.icon}
                            title = {item.title}
                            count = {item.count}
                            percent = {item.percent}
                            color = {item.color}
                        />
                    )
                })}
            </div>
            <DashboardLocation/>
            <div className="row flex">
                <DashboardTopFive
                    icon = {faUser}
                    title = "Top customers"
                    color = "lightblue"
                />
                <DashboardTopFive
                    icon = {faTshirt}
                    title = "Top selling products"
                    color = "pink"
                />
            </div>
            <div className="row flex">
                <DashboardRecentReview
                    icon = {faStar}
                    title = "Customer Review"
                    color = "orange"
                    topRecentVote = {topRecentVote}
                />
                <DashboardTaskList // recent orders
                    icon = {faFileInvoice}
                    title = "Recent Order"
                    color = "green"
                    topRecentVote = {topRecentVote}
                />
            </div>
        </div>
    )
}