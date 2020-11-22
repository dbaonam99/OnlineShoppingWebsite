import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
var parse = require('html-react-parser');


export default function DashboardEmailManager(props) {

    const [emailList, setEmailList] = useState([])
    useEffect(() => {
        for (let i in props.email) {
            if (props.email[i] !== false) {
                setEmailList(emailList=>[
                    ...emailList, 
                    props.email[i].replace(/\<(\?xml|(\!DOCTYPE[^\>\[]+(\[[^\]]+)?))+[^>]+\>/g, '')
                                  .replace(/^<html[^>]*>|<\/html>$/g, '')
                                  .replace(/^<div[^>]*>|<\/div>$/g, '')
                ])
            }
        }
    },[props.email])

    console.log(emailList)

    return (
        <div>
            { emailList.length > 0 &&
                emailList.map((item, index)=>{
                    return (
                        <div 
                            key={index}
                        >
                                {parse(item)}
                        </div>  
                    )
                })
            }
        </div>
    )
}