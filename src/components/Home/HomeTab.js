import React, { Component } from 'react';
import '../../App.css';
import BestSeller from "./BestSeller.js"
import NewProducts from "./NewProducts.js"
import SalesProducts from "./SalesProducts.js"

export default class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            isActive: 1
        }
    }

    render() {
        return(
            <div className="HomeTab">
                <div className="home-tab flex-center">
                    <p onClick={() => {this.setState({ currentTab: 1, isActive: 1 })}} className={this.state.isActive === 1 ? "home-tab-active" : ""}>Best Sellers</p>
                    <p onClick={() => {this.setState({ currentTab: 2, isActive: 2  })}} className={this.state.isActive === 2 ? "home-tab-active" : ""}>New Products</p>
                    <p onClick={() => {this.setState({ currentTab: 3, isActive: 3  })}} className={this.state.isActive === 3 ? "home-tab-active" : ""}>Sales Products</p>
                </div>
                <div className="tab-content">
                    {this.state.currentTab === 1 && <BestSeller/>}
                    {this.state.currentTab === 2 && <NewProducts/>}
                    {this.state.currentTab === 3 && <SalesProducts/>}
                </div>
            </div>
        )
    }
}