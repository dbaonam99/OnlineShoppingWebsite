import React from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DashboardTopFive(props) {
    const test =[1,2,3,4,5]
    return (
        <div className="topfive flex-col">
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content flex">
                    <div className="topfive-list">
                        <div className="top-location-div topfive-div flex header">
                            <div style={{width: '10%'}}>ID</div>
                            <div style={{width: '50%', marginLeft: '6px'}}>User</div>
                            <div style={{width: '20%', textAlign: 'right'}}>Product</div>
                            <div style={{width: '20%', textAlign: 'right'}}>Total</div>
                        </div>
                        {
                            test.map((item, index)=>{
                                return(
                                    <div 
                                        item={item}
                                        key={index}
                                        className="top-location-div topfive-div flex"
                                    >
                                        <div style={{width: '10%'}}>1</div>
                                        <div style={{width: '50%', textAlign: 'left'}} className="top-user flex">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/180819_블랙핑크_팬싸인회_코엑스_라이브프라자_리사.jpg/440px-180819_블랙핑크_팬싸인회_코엑스_라이브프라자_리사.jpg" className="top-user-avt" alt=""></img>
                                            <p className="top-user-name">Duong bao nam</p>
                                        </div>
                                        <div style={{width: '20%', textAlign: 'right'}}>20</div>
                                        <div style={{width: '20%', textAlign: 'right'}}>100000</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}