import React, { Component } from "react";
import "../App.css";
import NewsBanner from '../components/NewsBanner.js'
import NewsBody from '../components/NewsBody.js'
import Header from '../components/Header/Header.js'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default class NewsPages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTab: -1,
            currentTabText: "",
            news: [ 
                {
                    id: 1,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Inspiration",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 1232,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 2,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 1233,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 3,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Inspiration",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 1123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 4,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 1323,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 5,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Inspiration",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 5123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 6,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 23,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 7,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 13,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 8,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 12,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 9,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 3,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 10,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/10/6.jpg",
                    newTime: "20.10 2016",
                    newCate: "Lifestyle",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 13,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 11,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 12,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 13,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 14,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 15,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 16,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 17,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 18,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 19,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2013/11/7-750x480.jpg",
                    newTime: "20.10 2016",
                    newCate: "fashion",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 20,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "fuck",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 21,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "zxc",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 22,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "SHOPPccING",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 21,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 23,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newView: 123,
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                }
            ]
        }
    }

    render() {
        return (
            <div className="NewsPages">
                <Header/>
                <NewsBanner 
                    news={this.state.news} 
                    location={this.state.location}
                    currentTab={this.state.currentTab}
                    currentTabText={this.state.currentTabText}
                />
                <NewsBody
                    news={this.state.news} 
                    currentTab={this.state.currentTab}
                    currentTabText={this.state.currentTabText}
                />
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
