import React, { useRef } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client"
import axios from 'axios'

const ENDPOINT = "http://localhost:4000";

export default function DashboardInbox(props) {
    
    const [allChatData, setAllChatData] = useState([])
    const [roomId, setRoomId] = useState(0);
    const [roomIndex, setRoomIndex] = useState(0)
    const [chatInput, setChatInput] = useState("")

    const socket = socketIOClient(ENDPOINT);

    useEffect(() => {
        socket.emit('join', {
            sessionId: 'admin',
            isAdmin: true
        })
        socket.on('send-all-chat', (data)=>{
            setAllChatData(data)
            if (data.length > 0) setRoomId(data[0].sessionId)
            setTimeout(()=>{
                if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
            }, 100)
        })
        socket.on("client-msg", function(data) {
            setAllChatData(data.allchat)
            setTimeout(()=>{
                if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
            }, 100)
        })
    },[])

    const handleOnChange = (event) => {
        setChatInput(event.target.value)
    }

    const sendChatInput = (event) => {
        event.preventDefault();
        const data = {
            fromAdmin: true,
            text: chatInput,
            time: new Date(),
            roomId: roomId
        }
        socket.emit('messageSend-admin', data)

        axios.get(`http://localhost:4000/chat`)
            .then(res => {
                setAllChatData(res.data)
            }
        )
        setChatInput("")
        setTimeout(()=>{
            if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }

    const messageRef = useRef([]);

    return (
        <div className="boxchat-admin flex">
            <div className="boxchat-list">
                <div className="boxchat-search">
                    <input type="text" placeholder="Search"></input>
                </div>
                { allChatData.length > 0 && 
                    allChatData.map((item,index)=>{
                        return (
                            <div 
                                key={index}
                                className="boxchat-item flex"
                                onClick={(event)=>{
                                    setRoomId(item.sessionId)
                                    setRoomIndex(index)
                                    // console.log(messageRef.current.scrollHeight)
                                    // messageRef.current.scrollTo(0,messageRef.current.scrollHeight)
                                    setTimeout(()=>{
                                        if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
                                    }, 10)
                                }}
                            >
                                <div className="boxchat-avt flex-center" style={{pointerEvents: 'none'}}>
                                    <img 
                                        src="https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg" 
                                        alt=""
                                    ></img>
                                </div>
                                <div className="flex-col" style={{pointerEvents: 'none'}}>
                                    <p className="boxchat-name">{item.chatName}</p>
                                    <p className="boxchat-first">{item.chatContent[item.chatContent.length - 1].text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="boxchat-main">
                <div className="boxchat-box">
                    { allChatData.length>0 &&
                        <div className="boxchat-box-info">
                            <div className="boxchat-box-avt flex-center">
                                <img 
                                    src="https://cdn4.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.jpg" 
                                    alt=""
                                ></img>
                            </div>
                            <div className="flex-center">
                                <p className="boxchat-name">{allChatData[Number(roomIndex)].chatName}</p>
                            </div>
                        </div>
                    }
                    <div 
                        className="boxchat-contents"
                    >
                        { allChatData.length>0 &&
                            <div 
                                className="flex-col chat-box-list">
                                {
                                    allChatData[roomIndex].chatContent.map((item, index) => {
                                        return (
                                            <div 
                                                ref={messageRef}
                                                key={index}
                                                className="chat-list">
                                                {
                                                    item.fromAdmin !== true && 
                                                    <div className="box-chat-clienttext">
                                                        <p>{item.text}</p>
                                                    </div>
                                                }
                                                {
                                                    item.fromAdmin === true && 
                                                    <div className="box-chat-admintext">
                                                        <p>{item.text}</p>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>  
                        }
                    </div>
                </div>
                <div className="boxchat-type">
                    <form onSubmit={sendChatInput} className="boxchat-type-form">
                        <input 
                            type="text" 
                            onChange={handleOnChange} 
                            name="chatInput" 
                            // ref={inputRef}
                            value={chatInput}
                            placeholder="Type your message..."
                        ></input>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}