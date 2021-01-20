import React, { useState, useEffect } from 'react';
import '../../App.css';
import News from '../News/News.js'
import classNames from 'classnames'
import axios from 'axios'

export default function FashionNews(props) {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 3;

    useEffect(() => {
        axios.get(`http://pe.heromc.net:4000/news`)
            .then(res => {
                setNews(res.data)
            }
        )
    },[])

    const choosePage = (event) => {
        if (Number(event.target.id) === 0) {
            setCurrentPage(currentPage)
        } else if (Number(event.target.id) === -1) {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            } else {
                setCurrentPage(1);
            }
        } else if (Number(event.target.id) === 999) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(Number(event.target.id))
        }
    }

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
                                news={item}
                                key={index}
                            />
                        )                        
                    })}
                </div>
                <div className="pagination-container flex-center">
                    <div className="pagnigation flex-center" onClick={choosePage}>
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