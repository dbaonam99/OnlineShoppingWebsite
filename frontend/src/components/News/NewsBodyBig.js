import React from 'react';
import '../../App.css';
import { Link, withRouter } from 'react-router-dom';

function NewsBodyBig(props) {
    return(
        <div className="newsbody-big flex-center">
            <img 
                className="newsbody-big-img" 
                src={props.firstPost.newImg} alt="z"
                onClick={()=>{
                    window.scrollTo(0,0); 
                    props.history.push(`/news/${props.firstPost._id}`)
                }}
            />
            <div className="newsbody-info flex-center">
                <div className="newsbody-time">{props.firstPost.newTime}</div>
                <Link to={props.cateLink} className="newsbody-cate" onClick={()=>{window.scrollTo(0,0);}}>{props.firstPost.newCate}</Link>
            </div>
            <div 
                className="newsbody-title"
                onClick={()=>{
                    window.scrollTo(0,0); 
                    props.history.push(`/news/${props.firstPost._id}`)
                }}
            >{props.firstPost.newTitle}</div>
            <div className="newsbody-content">{props.firstPost.newContent}</div>
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