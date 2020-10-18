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
    const [openChatContent, setOpenChatContent] = useState(false)

    const socket = socketIOClient(ENDPOINT);

    // const {
    //     chatData,
    //     setChatDataFunc
    // } = useContext(ChatContext)
    const [chatData, setChatData] = useState([])
    const [chatList, setChatList] = useState([])

    useEffect(() => {
        if (sessionStorage.getItem('chat-id')) setOpenChatContent(true)
        socket.on('connect', function (data) {
            socket.emit('join', {
                sessionId: sessionStorage.getItem('chat-id')
            })
            socket.on('sendFirstInfo', (data)=> {
                setChatData(data);
                if (data.length > 0) setChatList(data[0].chatContent)
            })
            socket.on('thread', (data)=> {
                setChatData([data]);
                setChatList(data.chatContent)
            })
            socket.on('messageSend-thread', (data)=> {
                alert("checked")
                // setChatData(chatData=> [...chatData, {text: data.text, time: data.time}]);
                // setChatList(chatData=> [...chatData, data])
            })
            socket.on("admin-msg", function(data) {
                alert(data);
            })
        })
    }, [])

    const handleChange = (event) => {
        setInputValue({...inputValue , [event.target.name]: event.target.value})
    }
    const location = props.history.location.pathname;

    const sendFirstChatOnSubmit = (event) => {
        event.preventDefault();
        setOpenChatContent(true)
        if (!sessionStorage.getItem('chat-id')) {
            sessionStorage.setItem('chat-id', Math.floor(Math.random() * 190000000) + 100000000);
        }
        socket.emit('firstMessage', {
            sessionId: sessionStorage.getItem('chat-id'),
            chatName: inputValue.chatName,
            chatEmail: inputValue.chatEmail,
            chatContent: [
                {
                    text: inputValue.chatContent,
                    time: new Date()
                }
            ]
        });
    }

    const sendChatOnSubmit = (event) => {
        event.preventDefault();
        socket.emit('messageSend', {
            sessionId: sessionStorage.getItem('chat-id'),
            text: inputValue.messageSend,
            time: new Date(),
        });
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
                    <div className="chat-box-body">
                        <form onSubmit={sendFirstChatOnSubmit} className={openChat ? "form-chat hide_chat_box_item" : "form-chat"}>
                            <label>Introduce yourself *</label>
                            <input name="chatName" type="text" onChange={handleChange} placeholder="Name" className="intro" required></input>
                            <input name="chatEmail" type="text" onChange={handleChange} placeholder="Email" className="intro" required></input>
                            <label>Message *</label>
                            <textarea name="chatContent" type="textarea" onChange={handleChange} className="message" required></textarea>
                            <button className="btn">Chat</button>
                        </form>
                    </div>
                }
                { (chatData.length > 0 && openChatContent) && 
                    <ul>
                        <div className="chat-box-body">
                            <form onSubmit={sendChatOnSubmit} className={openChat ? "form-chat hide_chat_box_item" : "form-chat"}>
                                <div className="chat-box-user flex" style={{background: '#ddd', width:'100%'}}>
                                    <label>{chatData[0].chatName}</label>
                                    <label>{chatData[0].chatTime}</label>
                                    <label>{chatData[0].chatEmail}</label>
                                </div>  
                                <div className="flex-col" style={{overflowY: 'scroll'}}>
                                    {chatList.map((item, index) => {
                                        return (
                                            <label key={index}>
                                                {item.text}
                                            </label>
                                        )
                                    })}
                                </div>  
                                <div style={{position: 'absolute', bottom: '0', left: '0', background: 'red', width: '100%'}}>
                                    <input name="messageSend" type="text" onChange={handleChange} className="message"></input>
                                    <button>Chat</button>
                                </div>
                            </form>
                        </div>
                    </ul>
                }
            </div>
        </div>
    )
}

export default withRouter(OpenChatBtn);