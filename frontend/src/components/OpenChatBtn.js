import React, { useEffect, useState } from 'react'
import '../Styles/Chat.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import socketIOClient from "socket.io-client";
import { withRouter } from 'react-router-dom'


const ENDPOINT = "http://localhost:4000";

function OpenChatBtn(props) {

    const [openChat, setOpenChat] = useState(false);
    const [onHover, setOnHover] = useState(false); 
    const [inputValue, setInputValue] = useState("");
    const [chatData, setChatData] = useState([]);

    const socket = socketIOClient(ENDPOINT);

    useEffect(() => { 
        socket.on('connect', function (data) {
            socket.emit('join', 'User connect to website');
        })
        socket.on('thread', (data)=> {
            setChatData(chatData=>[...chatData, data]);
        })
    }, [])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        socket.emit('mess', inputValue);
    }

    const handleChange = (event) => {
        // setInputValue(event.target.value)
    }
    const location = props.history.location.pathname;

    return (
        <div 
            className={location === "/admin" || location === "/admin/dashboard" ? "chat-btn displayNone" : "chat-btn"}
            onMouseEnter={()=> { setOnHover(true) }}
            onMouseLeave={()=> { if (openChat) { setOnHover(true) } else setOnHover(false) }}
        >
            <div 
                className={onHover ? "chat-btn-container chat-btn-hover" : "chat-btn-container"}
                onClick={()=>{ if (openChat) { setOpenChat(false); setOnHover(false) } else { setOpenChat(true); setOnHover(true) }}}
                >
                <FontAwesomeIcon icon={faComment}/>
                <p>Live Chat</p>
            </div>
            <div className={openChat ? "chat-box hide_chat_box" : "chat-box"}>
                <div className="chat-box-header">
                    Live Chat
                </div>
                <div className="chat-box-body">
                    <form onSubmit={handleSubmit} className={openChat ? "form-chat hide_chat_box_item" : "form-chat"}>
                        <label>Introduce yourself *</label>
                        <input type="text" onChange={handleChange} placeholder="Name" className="intro"></input>
                        <input type="text" onChange={handleChange} placeholder="Email" className="intro"></input>
                        <label>Message *</label>
                        <textarea type="textarea" onChange={handleChange} className="message"></textarea>
                        <button className="btn">Chat</button>
                    </form>
                </div>
                {/* <ul>
                    {
                        chatData.map((item, index)=>{
                            return(
                                <div key={index}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </ul> */}
            </div>
        </div>
    )
}

export default withRouter(OpenChatBtn);