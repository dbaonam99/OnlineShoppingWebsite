import React, { } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../App.css';

function News(props) {

    const redirect = (target) => {
        window.scrollTo(0,0);
        props.history.push(`/news/${news._id}`);
    }

    const news = props.news;
    const cateLink = (`/news/category/${news.newCate}`).toLowerCase()

    return(
        <div 
            className="News">
            <div className="news-img"
                onClick={redirect}>
                <img src={news.newImg} alt="z"></img>
            </div>
            <div className="news-info flex-center">
                <div className="news-time">{news.newTime}</div>
                <Link to={cateLink} className="news-cate" onClick={()=>{window.scrollTo(0,0);}}>{news.newCate}</Link>
            </div>
            <div 
                className="news-title-box"
                onClick={redirect}>
                {news.newTitle}
            </div>
            <p className="news-content tripledot">
                {news.newContent}
            </p>
            <div 
                className="news-link flex-center"
                onClick={redirect}>
                <p>Read More</p>
            </div>
        </div>
    )
}

export default withRouter(News);
