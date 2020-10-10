import React from 'react';
import '../../App.css';
import classNames from 'classnames'
import { withRouter } from 'react-router-dom';

function NewsNavbar(props) {

    return(
        <div className={classNames("newsbanner-nav", {
            displayNone: props.history.location.pathname !== "/news"
        })}>
            <div
                className={props.currentTab === -1 ? "newsbanner-nav-active" : ""}
                onClick={() => {
                    props.setCurrentTab(-1);
                    props.setCurrentPage(1);
                }}
                >All Blog Posts
            </div>
            {props.sortedCate.map((item, index) => {
            return (
                <div
                    key={index}
                    id={index}
                    className={props.currentTab === Number(index) ? "newsbanner-nav-active" : ""}
                    onClick={(event) => {
                        props.setCurrentTab(index)
                        props.setCurrentTabText(event.currentTarget.textContent)
                        props.setCurrentPage(1)
                    }}
                    >{item}
                </div>
            )})}
        </div>
    )
    
} export default withRouter(NewsNavbar);