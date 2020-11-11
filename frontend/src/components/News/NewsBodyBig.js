import React from 'react';
import '../../App.css';
import { Link, withRouter } from 'react-router-dom';

function NewsBodyBig(props) {

    const date = new Date(props.firstPost.newTime)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const str = day + '.' + month + '.' +year

    return(
        <div className="newsbody-big flex-center">
            <img 
                className="newsbody-big-img" 
                src={props.firstPost.newImg} alt=""
                onClick={()=>{
                    window.scrollTo(0,0); 
                    props.history.push(`/news/${props.firstPost._id}`)
                }}
            />
            <div className="newsbody-info flex-center">
                <div className="newsbody-time">{str}</div>
                <Link to={props.cateLink} className="newsbody-cate" onClick={()=>{window.scrollTo(0,0);}}>{props.firstPost.newCate}</Link>
            </div>
            <div 
                className="newsbody-title"
                onClick={()=>{
                    window.scrollTo(0,0); 
                    props.history.push(`/news/${props.firstPost._id}`)
                }}
            >{props.firstPost.newTitle}</div>
            <div className="newsbody-content" dangerouslySetInnerHTML={{__html: props.firstPost.newContent}} ></div>
            <div 
                className="newsbody-link"
                onClick={()=>{
                    window.scrollTo(0,0); 
                    props.history.push(`/news/${props.firstPost._id}`)
                }}
            >Read More</div>
            <div className="newsbody-smaill-line"></div>
        </div>
    )
    
} export default withRouter(NewsBodyBig);