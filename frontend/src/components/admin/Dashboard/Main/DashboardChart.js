import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faClock } from '@fortawesome/free-solid-svg-icons'  
import { Bar } from '@reactchartjs/react-chart.js' 

export default function DashboardChart(props) {

    const products = props.products 
    const order = props.order 
    const [data, setData] = useState({})

    useEffect(()=>{
        if (products.length > 0 && order.length > 0) {
            const allCate = Object.values(products.reduce((a, {productCate}) => {
                a[productCate] = a[productCate] || {productCate, count: 0};
                return a;
            }, Object.create(null)));
    
            for (let i in allCate) {
                for (let j in products) {
                    if (allCate[i].productCate === products[j].productCate) {  
                        allCate[i].count += products[j].productSold
                    }
                }
            }
            allCate.sort((a, b) => b.count - a.count)
            const topCate = allCate.splice(0, 5); 
            // console.log(topCate)
            const topCateList = []
            for (let i in topCate) {
                topCateList.push(topCate[i].productCate)
            }
            setData({
                labels: topCateList,
                datasets: [
                  {
                    label: '',
                    data: [topCate[0].count, topCate[1].count, topCate[2].count, topCate[3].count, topCate[4].count],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.8)',
                      'rgba(54, 162, 235, 0.8)',
                      'rgba(255, 206, 86, 0.8)',
                      'rgba(75, 192, 192, 0.8)',
                      'rgba(153, 102, 255, 0.8)',
                      'rgba(255, 159, 64, 0.8)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
            })
        }
    },[products, order])  

    const options = { 
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{ 
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    borderDash: [4, 2],
                    color: "#ddd"
                }
            }]
        }
    }

    return (
        <div className="chart flex-col">
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={faChartBar} className="icon"/>
            </div>
            <div className="top-location-container" style={{height: 'max-content'}}>
                <div className="headerbox-header">
                    <p>2020 Sales by Top 5 Categories</p>
                </div>
                <div className="top-location-content flex">
                    <div className="top-location-map" style={{margin: '0'}}>
                        <Bar data={data} options={options}/> 
                        {/* <Line data={data} options={options} />  */}
                    </div>
                </div>
                <div className="count-line"></div>
                <div className="count-status flex-center">
                    <FontAwesomeIcon icon={faClock} className="count-up"/> 
                    <p>Updated 3 minutes ago</p>
                </div>
            </div>
        </div>
    )
}