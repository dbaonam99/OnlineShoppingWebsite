import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardSubscriberCreate(props) {

    const createForm = useRef();
    
    const [subscriberEmail, setSubscriberEmail] = useState("")

    const email = props.email;
 
    useEffect(()=> {
        if (email) {    
            setSubscriberEmail(email.subscriberEmail)
        }
    },[email])

    const onSubmit = (event) => {
        event.preventDefault()

        axios.post(`http://pe.heromc.net:4000/email/update/${email._id}`, {
            subscriberEmail: subscriberEmail
        }).then(()=>{
            props.setCloseEditFunc(false);
            props.setToastFunc(true);
        })
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box"> 
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Email infomation
                    </div>
                    <div  
                        className="create-box-title-close flex-center"
                        onClick={()=>{
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Email</div>
                        <div className="dashboard-right">
                            <input 
                                type="text" name="email" 
                                value={subscriberEmail || ""}
                                onChange={(event)=>{
                                    setSubscriberEmail(event.target.value)
                                }} required
                                ></input>
                        </div>
                    </div>
                    <div className="flex-center" style={{marginTop: '40px'}}>
                        <button className="create-box-btn btn">
                            Edit subscriber
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}