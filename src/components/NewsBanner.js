import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
    withRouter
  } from "react-router-dom"; 

import NewsBody from './NewsBody.js'

class NewsBanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: this.props.history.location.pathname,
            currentTab: -1,
            currentTabText: "",
            news: [ 
                {
                    id: 1,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Inspiration",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 2,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 3,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Inspiration",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 4,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 5,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Inspiration",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 6,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 7,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 8,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 9,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 10,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 11,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 12,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 13,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 14,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 15,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 16,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 17,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 18,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 19,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 20,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "fuck",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 21,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "zxc",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 22,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "SHOPPccING",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 21,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 23,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44-360x240.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                }
            ]
        }
    }

    render() {
        const { location, currentTab, news } = this.state;
        const locationText = location.slice(1);

        const cate = Object.values(news.reduce((a, {newCate}) => {
            a[newCate] = a[newCate] || {newCate, count: 0};
            a[newCate].count++;
            return a;
        }, Object.create(null)));



        const splicedCate = cate.splice(0,5);
        
        let newCateArr = [];
        for (let i = 0; i < splicedCate.length; i++) {
            newCateArr.push(splicedCate[i].count);
        }

        splicedCate.sort((a, b) => b.count - a.count);

        const sortedCate = [];

        for (let i = 0; i < splicedCate.length; i++) {
            sortedCate.push(splicedCate[i].newCate);
        }

        return(
            <div className="NewsBanner">
                <div className="newsbanner-container">
                    <div className="newsbanner-overlay flex-center">
                        <div className="newsbanner-title">
                            News
                        </div>
                        <div className="newsbanner-breadcrumb flex-center">
                            <div>Home</div>

                            <FontAwesomeIcon icon={faAngleRight} className="cart-icon"/>
                            <div>{locationText}</div>
                        </div>
                        <div className="newsbanner-nav">
                            <div
                                className={currentTab === -1 ? "newsbanner-nav-active" : ""}
                                onClick={() => {this.setState({currentTab: -1})}}
                                >All Blog Posts</div>
                            {
                                sortedCate.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            id={index}
                                            className={currentTab === Number(index) ? "newsbanner-nav-active" : ""}
                                            onClick={(event) => {
                                                console.log();
                                                this.setState({
                                                    currentTab: index, 
                                                    currentTabText:event.currentTarget.textContent
                                                })
                                            }}
                                            >{item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <NewsBody news={this.state.news} currentTabText={this.state.currentTabText} currentTab={this.state.currentTab}/>
            </div>
        )
    }
}

export default withRouter(NewsBanner);