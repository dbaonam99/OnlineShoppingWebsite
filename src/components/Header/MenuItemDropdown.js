import React, { useState } from 'react'
import classNames from 'classnames'
import {
    Link, withRouter
  } from "react-router-dom"; 
import Dropdown from './Dropdown';

function MenuItemDropdown(props) {
    
    const [dropdownHover, setDropdownHover] = useState(false)
    const location = props.location.pathname;

    return (
        <li 
            className="menu-item"
            onMouseEnter={()=>{
                setDropdownHover(true)
            }}
            onMouseLeave={()=>{
                setDropdownHover(false)
            }}
            >
            <Link to={props.url}
                className={classNames({
                    active: location === props.url,
                    whitelink_header: props.whiteText === true,
                })}
            >{props.label}</Link>
            {(dropdownHover === true && props.dropdownContent.length > 0) && 
                <Dropdown 
                    className="dropdown-display"
                    dropdownContent={props.dropdownContent}
                /> 
            }
        </li>
    )
}
export default withRouter(MenuItemDropdown);