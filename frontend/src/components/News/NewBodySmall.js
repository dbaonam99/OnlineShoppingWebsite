import React from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';

function NewsBodySmall(props) {

    const item = props.item;

    const date = new Date(item.newTime)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const timeStr = day + '.' + month + '.' +year

    return(
        <div className="newsbody-small flex-col"> 
            <div className="newsbody-small-container">
                <img 
                    className="newsbody-small-img" 
                    src={item.newImg} alt=""
                    onClick={()=>{
                        window.scrollTo(0,0); 
                        props.history.push(`/news/category/${item.newCate}`)
                    }}
                />
                <div className="newsbody-small-left">
                    <div className="newsbody-small-info flex-center">
                        <div className="newsbody-time">{timeStr}</div>
                        <div 
                            className="newsbody-cate" 
                            onClick={()=>{
                                window.scrollTo(0,0); 
                                props.history.push(`/news/category/${item.newCate}`)
                            }}
                        >{item.newCate}</div>
                    </div>
                    <div 
                        className="newsbody-title"
                        onClick={()=>{
                            window.scrollTo(0,0); 
                            props.history.push(`/news/${item._id}`)
                        }}
                    >{item.newTitle}</div>
                    <div className="newsbody-content" dangerouslySetInnerHTML={{__html: item.newContent}} ></div>
                    <div 
                        className="newsbody-link"
                        onClick={()=>{
                            window.scrollTo(0,0); 
                            props.history.push(`/news/${item._id}`)
                        }}
                    >Read More</div>
                </div>
            </div> 
            <div className="newsbody-smaill-line"></div>
        </div>
    )
    
} export default withRouter(NewsBodySmall);