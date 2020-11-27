import React from 'react';
import '../../App.css';
import DropdownSlider from './DropdownSlider.js'
import {
    withRouter
} from 'react-router-dom'
import womenImg from '../../assets/women-dropdown.jpg'
import womenImg2 from '../../assets/women-dropdown2.jpg'
import womenImg3 from '../../assets/women-dropdown3.jpg'
import menImg from '../../assets/men-dropdown.jpg'
import menImg2 from '../../assets/men-dropdown2.jpg'
import menImg3 from '../../assets/men-dropdown3.jpg'

function Dropdown(props) {

    const redirect = (event) => {
        window.scrollTo(0,0);
        props.history.push(`/${event.target.id}`)
        props.handleLeaveHover()
    }

    const sex = props.label.toLowerCase()

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
                                {item.dropdownTitle &&
                                    <div 
                                        id = {`${sex}/${item.dropdownTitle.replace(/\s+/g, '')}`}
                                        onClick={redirect}
                                        className="dropdown-title">{item.dropdownTitle}
                                    </div>
                                }
                                <div 
                                    className="dropdown-item flex-col">
                                    {
                                        item.dropdownList.map((item, index) => {
                                            return (
                                                <div
                                                    id = {`${sex}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    onClick={redirect}
                                                    key={index}
                                                    style={{textTransform: 'capitalize', cursor: 'pointer'}}
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
                            menImg,
                            menImg2,
                            menImg3,
                        ]}
                    ></DropdownSlider>
                }
            </div>
        </div>
    )
}

export default withRouter(Dropdown)