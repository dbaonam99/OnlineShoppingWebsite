import React, { useRef } from 'react'
import '../../../../App.css'
import '../../../../Styles/Dashboard.css'
import { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client"
import axios from 'axios'

const ENDPOINT = "http://localhost:4000";

export default function DashboardInbox(props) {
    
    const [allChatData, setAllChatData] = useState([])
    const [constAllChatData, setConstAllChatData] = useState([])
    const [roomId, setRoomId] = useState(0);
    const [roomIndex, setRoomIndex] = useState(0)
    const [chatInput, setChatInput] = useState("")
    const [searchInput, setSearchInput] = useState("")

    const socket = socketIOClient(ENDPOINT);

    useEffect(() => {
        socket.emit('join', {
            sessionId: 'admin',
            isAdmin: true
        })
        socket.on('send-all-chat', (data)=>{
            setAllChatData(data)
            setConstAllChatData(data)
            if (data.length > 0) {
                setRoomId(data[0].sessionId)
                if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
            }
        })
        socket.on("client-msg", function(data) {
            setAllChatData(data.allchat)
            setConstAllChatData(data.allchat)
            if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
        })
    },[])

    const handleOnChange = (event) => {
        setChatInput(event.target.value)
    }

    const sendChatInput = (event) => {
        event.preventDefault();
        if (chatInput === "") {
            return
        }
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
                setConstAllChatData(res.data)
            }
        )
        setChatInput("")
        setTimeout(()=>{
            if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }

    const messageRef = useRef([]);

    const filterOnSearch = (value) => {
        const search = []
        for (let i in constAllChatData) {
            if ((constAllChatData[i].chatName).toLowerCase().includes(value)) {
                search.push(constAllChatData[i])
            }
        }
        setAllChatData(search)
    }

    return (
        <div className="boxchat-admin flex">
            <div className="boxchat-list">
                <div className="boxchat-search">
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={searchInput}
                        onChange={(event)=>{
                            setSearchInput(event.target.value)
                            filterOnSearch(event.target.value)
                        }}
                    ></input>
                </div>
                <div style={{height: '50px'}}></div>
                { allChatData.length > 0 && 
                    allChatData.map((item,index)=>{
                        return (
                            <div 
                                key={index}
                                className="boxchat-item flex"
                                onClick={(event)=>{
                                    setRoomId(item.sessionId)
                                    setRoomIndex(index)
                                    setTimeout(()=>{
                                        if (messageRef.current) messageRef.current.scrollIntoView({ behavior: "smooth" })
                                    }, 10)
                                }}
                            >
                                <div className="boxchat-avt flex-center" style={{pointerEvents: 'none'}}>
                                    { item.userInfo && 
                                        <img 
                                            src={item.userInfo.userAvt}
                                            alt=""
                                        ></img>
                                    }
                                    { !item.userInfo && 
                                        <img 
                                            src={"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/73321413_146697059956770_7174055866474168320_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=ni-Cr2_KyP0AX-BfQkv&_nc_ht=scontent-sin6-1.xx&oh=9cbda6699093e8dbb061a92c5bb58c7e&oe=5FCB1CFC"}
                                            alt=""
                                        ></img>
                                    }
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
                                { allChatData[Number(roomIndex)].userInfo && 
                                    <img 
                                        src={allChatData[Number(roomIndex)].userInfo.userAvt}
                                        alt=""
                                    ></img>
                                }
                                { !allChatData[Number(roomIndex)].userInfo && 
                                    <img 
                                        src={"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/73321413_146697059956770_7174055866474168320_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=ni-Cr2_KyP0AX-BfQkv&_nc_ht=scontent-sin6-1.xx&oh=9cbda6699093e8dbb061a92c5bb58c7e&oe=5FCB1CFC"}
                                        alt=""
                                    ></img>
                                }
                            </div>
                            <div className="flex-center">
                                { allChatData[Number(roomIndex)].userInfo && 
                                    <p className="boxchat-name">{allChatData[Number(roomIndex)].chatName}</p>
                                }
                                { !allChatData[Number(roomIndex)].userInfo &&
                                    <div className="flex" style={{alignItems: 'flex-end'}}>
                                        <p className="boxchat-name">{allChatData[Number(roomIndex)].chatName}</p>
                                        <p style={{marginLeft: '12px', color: '#777', fontSize: '16px'}}>(anonymous)</p>
                                    </div>
                                }
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