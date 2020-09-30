import React from 'react';
import '../../App.css';
import DropdownSlider from './DropdownSlider.js'

import womenImg from '../../assets/women-dropdown.jpg'
import womenImg2 from '../../assets/women-dropdown2.jpg'
import womenImg3 from '../../assets/women-dropdown3.jpg'

export default function Dropdown(props) {
    return(
        <div className="Dropdown">
            <div className="dropdown-container flex">
                { props.dropdownContent.map((item, index) => {
                    return (
                        <div 
                            className="dropdown-col flex"
                            key={index}
                        >
                            <div>
                                <div 
                                    animateIn='fadeInRight'
                                    className="dropdown-title">{item.dropdownTitle}
                                </div>
                                <div 
                                    animateIn='fadeInLeft' 
                                    className="dropdown-item flex-col">
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
                        </div>
                    )
                })}
                { props.label === 'Women' &&
                    <DropdownSlider 
                        width={"450"} 
                        height={"300"}
                        imgs={[
                            womenImg,
                            womenImg2,
                            womenImg3,
                        ]}
                    ></DropdownSlider>
                }
                { props.label === 'Men' &&
                    <DropdownSlider 
                        id={props.id}
                        width={"450"} 
                        height={"300"}
                        imgs={[
                            womenImg,
                            womenImg,
                            womenImg,
                        ]}
                    ></DropdownSlider>
                }
            </div>
        </div>
    )
}