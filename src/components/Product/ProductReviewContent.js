import React, { useState } from 'react'

export default function ProductReviewContent(props) {

    const [full, setFull] = useState(false);

    return (
        <div 
            className={full === false ? "review-third review-third-full" : "review-third"}
            onClick={()=> {
                if (props.content.length >= 175) {
                    if (full===false) setFull(true)
                    else setFull(false)
                }
            }}>
            {props.content}
        </div>
    )
}


