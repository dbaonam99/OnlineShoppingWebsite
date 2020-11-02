import React from 'react'
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
        })
        socket.on("client-msg", function(data) {
            console.log(data.allchat)
            setAllChatData(data.allchat)
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
        // setAllChatData(allChatData=> [...allChatData, data])
    }

    console.log(allChatData)

    return (
        <div className="boxchat-admin flex">
            <div className="boxchat-list">
                <div className="boxchat-search">
                    <input type="text"></input>
                </div>
                { allChatData.length > 0 && 
                    allChatData.map((item,index)=>{
                        return (
                            <div 
                                key={index} 
                                key={index}
                                className="boxchat-item flex-col"
                                onClick={()=>{
                                    // setChatContent(item.chatContent)
                                    setRoomId(item.sessionId)
                                    setRoomIndex(index)
                                }}
                            >
                                {item.chatName}
                                {item.chatContent[0].text}
                            </div>
                        )
                    })
                }
            </div>
            <div className="boxchat-main">
                <div className="boxchat-box">
                    { allChatData.length>0 &&
                        allChatData[roomIndex].chatContent.map((item, index)=>{
                            return(
                                <div key={index}>
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="boxchat-type">
                    <form onSubmit={sendChatInput}>
                        <input type="text" onChange={handleOnChange} name="chatInput"></input>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}