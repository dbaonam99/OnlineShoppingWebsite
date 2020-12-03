import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMailBulk } from '@fortawesome/free-solid-svg-icons'  
import { Pie } from '@reactchartjs/react-chart.js' 

export default function DashboardChartPie(props) {

    const email = props.email  
    const [data, setData] = useState({})

    useEffect(()=>{
        if (email.length > 0) { 
            let read = 0;
            let unread = 0;
            for (let i in email) {
                for (let j in email[i].sendedEmail) {
                    if (email[i].sendedEmail[j].isSeen === true) {
                        read++
                    } else {
                        unread++
                    }
                }
            }
            setData({
                labels: ['Read', 'Unread'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [read, unread],
                        backgroundColor: [
                            '#fb404b',
                            '#23ccef',
                        ],
                        borderColor: [
                            '#fb404b',
                            '#23ccef',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }
    },[email])  

    const options = {  
        responsive: true,
        maintainAspectRatio : false,
        legend: {
            position: 'bottom',
            labels: {
                fontSize: 14,
                padding: 30
            }
        },
        layout: {
            padding: { 
                top: '20', 
            }
        }
    }

    return (
        <div className="chartpie flex-col">
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={faMailBulk} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>Email Statistics</p>
                </div>
                <div className="top-location-content flex">
                    <div className="top-location-map pie" style={{margin: '0'}}> 
                        <Pie data={data} options ={options}/> 
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