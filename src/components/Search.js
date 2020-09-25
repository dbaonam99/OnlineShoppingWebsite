import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidUpdate() {
        this.inputElement.current.focus();
    }

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
                    <div className="search-tab-cate search-tab-active">All Categories</div>
                    <div className="search-tab-cate">Woman</div>
                    <div className="search-tab-cate">Bags</div>
                    <div className="search-tab-cate">Search</div>
                    <div className="search-tab-cate">Bags</div>
                    <div className="search-tab-cate">Search</div>
                </div>

                <div className="search-form" >
                    <form>
                        <FontAwesomeIcon icon={faSearch} className="icon"/>
                        <input placeholder="Search" ref={this.inputElement}/>
                        <FontAwesomeIcon icon={faTimes} className="icon"/>
                    </form>
                </div>
            </div>
        )
    }
}
