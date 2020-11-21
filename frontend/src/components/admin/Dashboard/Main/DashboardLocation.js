import React, { useEffect, useState } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardLocation(props) {

    const [mapLink, setMapLink] = useState("https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7861084.131203502!2d106.27071340282434!3d15.903283301254934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1602514190700!5m2!1sen!2s");
    const order = props.order

    const [location, setLocation] = useState([])

    useEffect(()=>{
        axios.get(`http://pe.heromc.net:4000/vietnam`)
            .then(res => {
                setLocation(res.data[0].tinh)
            }
        )
    },[])

    const tinh = Object.values(order.reduce((a, {orderTinh}) => {
        a[orderTinh] = a[orderTinh] || {orderTinh, count: 0};
        a[orderTinh].count++;
        return a;
    }, Object.create(null)));
    var total = 0;
    for (let i in tinh) {
        total += tinh[i].count
    }
    tinh.sort((a,b) =>  b.count - a.count)

    const topLocationList = tinh.splice(0,5)

    const setMap = (item) => {
        for(let i in location) {
            if (location[i].name === item) {
                setMapLink(location[i].location)
            }
        }
    }

    return (
        <div className="top-location flex-col">
            <div className="headerbox flex-center">
                <FontAwesomeIcon icon={faGlobe} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>Global Orders by Top Locations</p>
                </div>
                <div className="top-location-content flex">
                    <div className="top-location-list">
                        <div className="top-location-div flex header">
                            <div style={{width: '60%'}}>Province</div>
                            <div style={{width: '20%', textAlign: 'right'}}>Amount</div>
                            <div style={{width: '20%', textAlign: 'right'}}>Percent</div>
                        </div>
                        {topLocationList.map((item, index)=>{
                            return (
                                <div 
                                    key={index}
                                    className="top-location-div flex"
                                    onClick={()=>setMap(item.orderTinh)}
                                >
                                    <div style={{width: '60%'}}>{item.orderTinh}</div>
                                    <div style={{width: '20%', textAlign: 'right'}}>{item.count}</div>
                                    <div style={{width: '20%', textAlign: 'right'}}>{parseFloat((item.count/total) * 100).toFixed(2)} %</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="top-location-map">
                        <iframe 
                            title="map"
                            src={mapLink}
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            aria-hidden="false" 
                            tabIndex="0"/>
                    </div>
                </div>
            </div>
        </div>
    )
}