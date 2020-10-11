import React from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import DashboardMain from './DashboardMain'
import DashboardMenu from './DashboardMenu'


export default function Dashboard() {
    return (
        <div className="Dashboard flex">
            <DashboardMenu/>
            <DashboardMain/>
        </div>
    )
}