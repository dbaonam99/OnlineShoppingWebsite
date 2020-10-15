import React, { useEffect, useState } from 'react'
import '../Styles/Chat.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import socketIOClient from "socket.io-client";
import { withRouter } from 'react-router-dom'
import axios from 'axios'


const ENDPOINT = "http://localhost:4000";

function OpenChatBtn(props) {

    const [openChat, setOpenChat] = useState(false);
    const [onHover, setOnHover] = useState(false); 
    const [inputValue, setInputValue] = useState("");
    const [chatData, setChatData] = useState([]);
    const [openChatContent, setOpenChatContent] = useState(false)

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
        // socket.emit('mess', inputValue);
    }

    const handleChange = (event) => {
        setInputValue({...inputValue , [event.target.name]: event.target.value})
    }
    const location = props.history.location.pathname;

    const sendChatOnSubmit = () => {
        setOpenChatContent(true)
        axios.post('http://localhost:4000/chat', {
            chatName: inputValue.chatName,
            chatEmail: inputValue.chatEmail,
            chatContent: [
                {
                    text: inputValue.chatContent,
                    time: new Date()
                }
            ]
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

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
                { openChatContent === false &&  
                    <div className="chat-box-body" onSubmit={sendChatOnSubmit}>
                        <form onSubmit={handleSubmit} className={openChat ? "form-chat hide_chat_box_item" : "form-chat"}>
                            <label>Introduce yourself *</label>
                            <input name="chatName" type="text" onChange={handleChange} placeholder="Name" className="intro" required></input>
                            <input name="chatEmail" type="text" onChange={handleChange} placeholder="Email" className="intro" required></input>
                            <label>Message *</label>
                            <textarea name="chatContent" type="textarea" onChange={handleChange} className="message" required></textarea>
                            <button className="btn">Chat</button>
                        </form>
                    </div>
                }
                { openChatContent &&  
                    <ul>
                        zxc
                        {
                            chatData.map((item, index)=>{
                                return (
                                    <div key={index}>
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default withRouter(OpenChatBtn);