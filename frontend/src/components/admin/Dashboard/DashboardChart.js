import React, { } from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Doughnut } from "react-chartjs-2";

export default function DashboardChart(props) {

    return (
        <div className="chart flex-col">
            <div className="headerbox flex-center">
                <FontAwesomeIcon icon={faGlobe} className="icon"/>
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>Global Sales by Top Locations</p>
                </div>
                <div className="top-location-content flex">
                    <div className="top-location-map">
                        <Doughnut
                            data={{
                                labels: [
                                    "Africa",
                                    "Asia",
                                    "Europe",
                                    "Latin America",
                                    "North America"
                                ],
                                datasets: [
                                    {
                                    label: "Population (millions)",
                                    backgroundColor: [
                                        "#3e95cd",
                                        "#8e5ea2",
                                        "#3cba9f",
                                        "#e8c3b9",
                                        "#c45850"
                                    ],
                                    data: [2478, 5267, 734, 784, 433]
                                    }
                                ]
                            }}
                            option={{
                                title: {
                                    display: true,
                                    text: "Predicted world population (millions) in 2050"
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}