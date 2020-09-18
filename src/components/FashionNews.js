import React, { Component } from 'react';
import '../App.css';
import News from './News.js'
import classNames from 'classnames'

export default class FashionNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            newsPerPage: 3,
            isEnd: false,
            isStart: false,
            news: [ 
                {
                    id: 1,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Inspiration",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 2,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 3,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
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
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
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
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
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
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
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
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Photography",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 18,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
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
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "fuck",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 21,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "zxc",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 22,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "SHOPPccING",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaeczxczxat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 21,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                },
                {
                    id: 23,
                    newImg: "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-44.jpg",
                    newTime: "20.10 2016",
                    newCate: "Shopping",
                    newTitle: "Friday Finest The Best of The Week",
                    newContent: "xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim idxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru mollit anim id"
                }
            ]
        }
        this.choosePage = this.choosePage.bind(this);
    }

    choosePage(event) {
        if (Number(event.target.id) === 0) {
            this.setState({
                currentPage: this.state.currentPage
            })
        } else if (Number(event.target.id) === -1) {
            if (this.state.currentPage > 1) {
                this.setState({
                    currentPage: this.state.currentPage - 1
                })
            } else {
                this.setState({
                    currentPage: 1
                })
            }
        } else if (Number(event.target.id) === 999) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        } else {
            this.setState({
                currentPage: Number(event.target.id),
            })
        }
    }

    render() {        
        const { news } = this.state;

        const currentPage = this.state.currentPage;
        const newsPerPage = this.state.newsPerPage;
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }

        const pages = [];

        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else {
            if (currentPage === 1) {
                pages.push(currentPage, currentPage + 1, currentPage + 2 );
            } else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
                pages.push(currentPage -1, currentPage, currentPage + 1);
            } else if (currentPage === pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else {
                pages.push(currentPage - 2, currentPage - 1, currentPage);
            }
        }

        return(
            <div className="FashionNews">
                <div className="news-container">
                    <div className="news-title">Fashion News</div>
                    <div className="news-box">
                        { currentNews.map(function(item, index) {
                            return (
                                <News 
                                    newImg={item.newImg} 
                                    newTime={item.newTime}
                                    newCate={item.newCate}
                                    newTitle={item.newTitle}
                                    newContent={item.newContent}
                                    newId={item.id}
                                    key={index}
                                />
                            )                        
                        })}
                    </div>
                    <div className="pagination-container flex-center">
                        <div className="pagnigation flex-center" onClick={this.choosePage}>
                            <div id="-1" className={classNames({
                                pagnigation_disable: currentPage === 1
                            })}>←</div>
                            { pages.map(function(number, index) { 
                                if (currentPage === number) {
                                    return (
                                        <div key={number} id={number} className="pagnigation-active">
                                            {number}
                                        </div>
                                    )
                                } else {
                                    return (
                                    <div 
                                        key={number}
                                        id={number}
                                        >
                                            {number}
                                    </div>
                                    )
                                } 
                            })}
                            <div id="999" className={classNames({
                                pagnigation_disable: currentPage === pageNumbers.length
                            })}>→</div>
                        </div>
                    </div>
                    <div className="news-line"></div>
                </div>
            </div>
        )
    }
}