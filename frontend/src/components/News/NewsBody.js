import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import NewsNavbar from './NewsNavbar';
import NewsBodyBig from './NewsBodyBig';
import NewBodySmall from './NewBodySmall';
import NewsBodyPag from './NewsBodyPag';
import NewsBodyWidget from './NewsBodyWidget';

function NewsBody(props) {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 5;
    const [currentTab, setCurrentTab] = useState(-1);
    const [currentTabText, setCurrentTabText] = useState("");
    let firstPost = [];
    let sortedCate = [];
    let nextPosts = [];
    let splicedCate = [];
    let pages = [];
    let pageNumbers = []; //Số trang được chia ra
    const [searchNews, setSearchNews] = useState(null)
    const [searchErr, setSearchErr] = useState(null)

    useEffect(() => {
        if (searchNews) {
            axios.get(`http://pe.heromc.net:4000/news`)
                .then(res => { 
                    const search = []
                    for (let i in res.data) { 
                        if ((res.data[i].newTitle).toLowerCase().includes(searchNews)) {
                            search.push(res.data[i])
                        }
                    }
                    if (search.length > 0) {
                        setNews(search) 
                        setSearchErr(null)
                    } else { 
                        setSearchErr("No results found") 
                    }
                }
            )
        } else {
            if (props.history.location.pathname === "/news") {
                axios.get(`http://pe.heromc.net:4000/news`)
                    .then(res => {
                        setNews(res.data)
                    }
                )
            } else {
                axios.get(`http://pe.heromc.net:4000/news/category/${props.match.params.cate}`)
                    .then(res => {
                        setNews(res.data)
                    }
                )
            }
        }
    },[props.history.location.pathname, props.match.params.cate, searchNews])

    const choosePage = (event) => {
        window.scrollTo(0,0);
        if (Number(event.target.id) === 0) {
            setCurrentPage(currentPage)
        } else if (Number(event.target.id) === -1) {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            } else {
                setCurrentPage(1)
            }
        } else if (Number(event.target.id) === 999) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(Number(event.target.id))
        }
    }
    
    if (news.length > 0) {
        //Filt Posts depend on Category
        let filterNews = [];
        if (currentTab === -1) {
            filterNews = news;
        } else if (currentTabText) {
            filterNews = news.filter((item) => {
                return item.newCate === currentTabText
            })
        } else {
            filterNews = news;
        }
        //Panigation
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const currentNews = filterNews.slice(indexOfFirstNews, indexOfLastNews);
        if (currentNews) {
            firstPost = currentNews[0]; //Post of big image
        }
        nextPosts = currentNews.slice(1);

        //Panigation button
        for (let i = 1; i <= Math.ceil(filterNews.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage);
        } else {
            if (currentPage === 1 && pageNumbers.length === 1) {
                pages.push();
            } else if (currentPage === 1 && currentPage < pageNumbers.length) {
                pages.push(currentPage, currentPage + 1);
            }else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage);
            } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
                pages.push(currentPage -1, currentPage);
            } else if (currentPage === pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage);
            } else {
                pages.push(currentPage - 1, currentPage);
            }
        }
        
        //Get all category
        const cate = Object.values(news.reduce((a, {newCate}) => {
            a[newCate] = a[newCate] || {newCate, count: 0};
            a[newCate].count++;
            return a;
        }, Object.create(null)));
        //Sort and splice category by posts count
        cate.sort((a,b) =>  b.count - a.count)
        splicedCate = cate.splice(0,5);
        splicedCate.sort((a, b) => b.count - a.count);

        for (let i = 0; i < splicedCate.length; i++) {
            sortedCate.push(splicedCate[i].newCate);
        }
    }
    const setCurrentTabFunc = (data) => {
        setCurrentTab(data)
    }
    const setCurrentTabTextFunc = (data) => {
        setCurrentTabText(data)
    }
    const setCurrentPageFunc = (data) => {
        setCurrentPage(data)
    }
    const cateLink = (`/news/category/${firstPost.newCate}`)

    return(
        <div className="NewsBody">
            <NewsNavbar
                setCurrentTab = {setCurrentTabFunc}
                setCurrentTabText = {setCurrentTabTextFunc}
                setCurrentPage = {setCurrentPageFunc}
                currentTab = {currentTab}
                currentTabText = {currentTabText}
                sortedCate = {sortedCate}
            />
            <div className="newsbody-container">
                <div className="newsbody-post">
                    <NewsBodyBig
                        firstPost = {firstPost}
                        cateLink = {cateLink}
                    />
                    {nextPosts.map((item, index) => {
                        return (
                            <NewBodySmall
                                item={item}
                                key={index}
                            />
                        )
                    })}
                    <NewsBodyPag
                        choosePage = {choosePage}
                        currentPage = {currentPage}
                        pages = {pages}
                        pageNumbers = {pageNumbers}
                    />
                </div>
                <NewsBodyWidget
                    searchErr={searchErr}
                    setSearchNews= {setSearchNews}
                />
            </div>
            <div className="newsbody-line"></div>
        </div>
    )
}
export default withRouter(NewsBody);