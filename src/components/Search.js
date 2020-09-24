import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Search extends Component {

    render() {
        return(
            <div className={this.props.searchOpen === false ? 'Search displayNone' : 'Search'}>
                <div className="search-header flex">
                    <div className="search-title">Search</div>
                    <div
                        className="search-close"
                        onClick={this.props.clickToClose}
                        >
                        <FontAwesomeIcon 
                            icon={faTimes}
                            className="icon"
                            />
                    </div>
                </div>

                <div className="search-tab flex">
                    <div className="search-tab-cate">All Categories</div>
                    <div className="search-tab-cate">Woman</div>
                    <div className="search-tab-cate">Bags</div>
                    <div className="search-tab-cate">Search</div>
                </div>

                <div className="search-form">
                    <form>
                        <input placeholder="Search"/>
                    </form>
                </div>
            </div>
        )
    }
}
