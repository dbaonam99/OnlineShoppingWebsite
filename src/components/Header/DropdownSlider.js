import React, { useEffect, useState } from 'react';
import '../../App.css';

export default function Dropdown(props) {

    const [imgIndex, setImgIndex] = useState(0);
    const [imgs] = useState(props.imgs)

    useEffect(()=>{
        setInterval(() => {
            setImgIndex(imgIndex + 1)
        }, 1500);
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
        </div>
    )
}