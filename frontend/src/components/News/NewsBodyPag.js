import React from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames'

function NewsBodyPag(props) {

    return(
        <div className="newspagnigation-container">
            <div className="newspagnigation" onClick={props.choosePage}>
                <div id="-1" className={classNames({
                    newspagnigation_disable: props.currentPage === 1
                })}>←</div>
                { props.pages.map(function(number, index) { 
                    if (props.currentPage === number) {
                        return (
                            <div key={number} id={number} className="newspagnigation-active">
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
                    newspagnigation_disable: props.currentPage === props.pageNumbers.length
                })}>→</div>
            </div>
        </div>
    )
    
} export default withRouter(NewsBodyPag);