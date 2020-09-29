import React from 'react';
import '../../App.css';

export default function Dropdown(props) {

    return(
        <div className="Dropdown">
            <div className="dropdown-container flex">
                { props.dropdownContent.map((item, index) => {
                    return (
                        <div 
                            key={index}
                        >
                            <div className="dropdown-title">{item.dropdownTitle}</div>
                            <div className="dropdown-item flex-col">
                                {
                                    item.dropdownList.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                            >
                                                {item}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}