import React, { useState } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons'

export default function DashboardMain() {

    const [mapLink, setMapLink] = useState("https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7861084.131203502!2d106.27071340282434!3d15.903283301254934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1602514190700!5m2!1sen!2s");
    const locationList = [
        {
            id: 1,
            province: 'Lâm Đồng',
            sold: 300,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999932.2721764668!2d107.43731656470102!3d11.766076132333083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171132659f3db7d%3A0xbb5ad2df5f54f56c!2zTMOibSDEkOG7k25nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1602515082636!5m2!1sen!2s"
        },
        {
            id: 2,
            province: 'Đồng Nai',
            sold: 200,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002447.9747412889!2d106.60387508775477!3d11.052687532466951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d952b84aea25%3A0xe04ae6f14b6e1655!2sDong%20Nai%2C%20Vietnam!5e0!3m2!1sen!2s!4v1602515127778!5m2!1sen!2s"
        },
        {
            id: 3,
            province: 'Hồ Chính Minh',
            sold: 100,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501707.73903348576!2d106.40344211409553!3d10.765916405851259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eefdb25d923%3A0x4bcf54ddca2b7214!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1602515295987!5m2!1sen!2s"
        },
        {
            id: 4,
            province: 'Tây Ninh',
            sold: 200,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125170.2675418176!2d106.0596125250039!3d11.366023081124238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6aeab90d3fc5%3A0xa059d1214008df15!2sT%C3%A2y%20Ninh%2C%20T%C3%A2y%20Ninh%20Province%2C%20Vietnam!5e0!3m2!1sen!2s!4v1602515345056!5m2!1sen!2s"
        },
        {
            id: 5,
            province: 'Bình Phước',
            sold: 100,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999807.805415844!2d106.35840508855446!3d11.800266915191212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3173682fdb7d221f%3A0x94c01b0e72f84211!2sBinh%20Phuoc%2C%20Vietnam!5e0!3m2!1sen!2s!4v1602515400437!5m2!1sen!2s"
        },
        {
            id: 6,
            province: 'Cần Thơ',
            sold: 30,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502745.65241348353!2d105.25200048230866!3d10.123590528004751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f927382cd%3A0x72a463d91109ec67!2zQ-G6p24gVGjGoSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1602515459132!5m2!1sen!2s"
        },
        {
            id: 7,
            province: 'Cà Mau',
            sold: 30,
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502745.65241348353!2d105.25200048230866!3d10.123590528004751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f927382cd%3A0x72a463d91109ec67!2zQ-G6p24gVGjGoSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1602515490165!5m2!1sen!2s"
        },
    ]

    let total = 0;
    for (let i of locationList) {
        total += i.sold
    }
    const topLocationList = locationList.splice(0,5)

    return (
        <div className="dashboard-main">
            <div className="top-location flex-col">
                <div className="headerbox flex-center">
                    <FontAwesomeIcon icon={faGlobe} className="icon"/>
                </div>
                <div className="top-location-container">
                    <div className="headerbox-header">
                        <p>Global Sales by Top Locations</p>
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
                                        onClick={()=> setMapLink(item.map)}
                                    >
                                        <div style={{width: '60%'}}>{item.province}</div>
                                        <div style={{width: '20%', textAlign: 'right'}}>{item.sold}</div>
                                        <div style={{width: '20%', textAlign: 'right'}}>{parseFloat((item.sold / total) * 100).toFixed(2)} %</div>
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
            <div className="row flex">
                <div className="total-count-item">
                    <div className="total-count-item-container">
                        <div className="headerbox count orange flex-center">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                        </div>
                        <div className="total-count-header flex-center">
                            <p>Total orders</p>
                        </div>
                        <div className="dashboard-count">
                            <p>3200</p>
                        </div>
                        <div className="count-line"></div>
                        <div className="count-status flex-center">
                            <FontAwesomeIcon icon={faArrowUp} className="count-up"/>
                            <p className="count-up">18.2%</p> 
                            <p>since last month</p>
                        </div>
                    </div>
                </div>
                <div className="total-count-item">
                    <div className="total-count-item-container">
                        <div className="headerbox count pink flex-center">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                        </div>
                        <div className="total-count-header flex-center">
                            <p>Total sales</p>
                        </div>
                        <div className="dashboard-count">
                            <p>$120 000</p>
                        </div>
                        <div className="count-line"></div>
                        <div className="count-status flex-center">
                            <FontAwesomeIcon icon={faArrowUp} className="count-up"/>
                            <p className="count-up">18.2%</p> 
                            <p>since last month</p>
                        </div>
                    </div>
                </div>
                <div className="total-count-item">
                    <div className="total-count-item-container">
                        <div className="headerbox count green flex-center">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                        </div>
                        <div className="total-count-header flex-center">
                            <p>Income</p>
                        </div>
                        <div className="dashboard-count">
                            <p>$30 000</p>
                        </div>
                        <div className="count-line"></div>
                        <div className="count-status flex-center">
                            <FontAwesomeIcon icon={faArrowUp} className="count-up"/>
                            <p className="count-up">18.2%</p> 
                            <p>since last month</p>
                        </div>
                    </div>
                </div>
                <div className="total-count-item">
                    <div className="total-count-item-container">
                        <div className="headerbox count lightblue flex-center">
                            <FontAwesomeIcon icon={faUser} className="icon"/>
                        </div>
                        <div className="total-count-header flex-center">
                            <p>Customers</p>
                        </div>
                        <div className="dashboard-count">
                            <p>1200</p>
                        </div>
                        <div className="count-line"></div>
                        <div className="count-status flex-center">
                            <FontAwesomeIcon icon={faArrowUp} className="count-up"/>
                            <p className="count-up">18.2%</p> 
                            <p>since last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}