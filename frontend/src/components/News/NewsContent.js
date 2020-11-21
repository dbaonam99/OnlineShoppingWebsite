import React from 'react';
import '../../Styles/News.css';
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function NewsContent(props) {

    const news = {};
    if (props.news) {
        Object.assign(news,props.news) // gán obj props.news vào news
    }
    const cateLink = (`/news/category/${news.newCate}`)

    const date = new Date(news.newTime)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const timeStr = day + '.' + month + '.' +year

    if (news._id) {
        axios.post(`http://pe.heromc.net:4000/news/update/${news._id}`, {
            countId: news._id
        })
    }
    
    return(
        <div className="NewsContent opa2">
            <div className="newsbody-info flex-center">
                <div className="newsbody-time" style={{color: '#777'}}>{timeStr}</div>
                <Link 
                    to={cateLink}
                    className="newsbody-cate a" 
                    onClick={()=>{window.scrollTo(0,0)}}
                    style={{color: '#111'}}
                    >{news.newCate}</Link>
            </div>
            <div className="news-title newscontent-title">{news.newTitle}</div>
            <div className="newscontent-share flex-center">
                <div className="icon-box flex-center" style={{backgroundColor: '#254d87'}}>
                    <FontAwesomeIcon icon={faFacebookF} className="icon"></FontAwesomeIcon>
                </div>
                <div className="icon-box flex-center" style={{backgroundColor: '#26b8ed'}}>
                    <FontAwesomeIcon icon={faTwitter} className="icon"></FontAwesomeIcon>
                </div>
                <div className="icon-box flex-center" style={{background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`}}>
                    <FontAwesomeIcon icon={faInstagram} className="icon"></FontAwesomeIcon>
                </div>
            </div>
            <div className="news-title newscontent-title">
                <img src={news.newImg} width='100%' alt=""/>
            </div>
            <div 
                className="newscontent-content flex-center"
                dangerouslySetInnerHTML={{__html: news.newContent}}>
            </div>
            {/* <div className="newscontent-pag flex-center">
                <div className="newscontent-pag-container flex">
                    <div>
                        Previous
                    </div>
                    <div>
                        Next
                    </div>
                </div>
            </div> */}
        </div>
    )
}