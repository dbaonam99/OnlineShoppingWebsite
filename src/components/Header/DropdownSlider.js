import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import '../../App.css';

export default function Dropdown(props) {

    const [imgIndex, setImgIndex] = useState(0);
    const [imgs] = useState(props.imgs)

    useEffect(()=>{
        const slide = setInterval(() => {
            setImgIndex(imgIndex + 1)
        }, 1500);

        return() => {
            clearInterval(slide)
        }
    }, [imgIndex])

    if (imgIndex >= imgs.length) {
        setImgIndex(0)
    }

    return(
        <div className="DropdownSlider">
            <div className="dropdownslider-container flex" style={{width: `${props.width}px`, height: `${props.height}px` }}>
                {
                    imgs.map((item, index) => {
                        return (
                            <img 
                                key={index}
                                alt=""
                                style={{transform: `translateX(-${props.width * imgIndex}px`}}
                                src={item} width='100%' height='100%'></img>
                        )
                    })
                }
            </div>
            <div className="dropdownslider-dot flex-center">
                {
                    imgs.map((item, index) => {
                        return (
                            <div 
                                key={index}
                                className={index === imgIndex ? "active-dot" : ""}
                            >
                                <FontAwesomeIcon icon={faCircle} className="icon"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}