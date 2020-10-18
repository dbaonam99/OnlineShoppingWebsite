import React from 'react'
import '../../../App.css'
import '../../../Styles/Dashboard.css'
import { useEffect, useState } from 'react'
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";

export default function DashboardInbox(props) {
    const [allChatData, setAllChatData] = useState([])
    const [chatContent, setChatContent] = useState([])
    const [roomId, setRoomId] = useState(0);
    const [roomIndex, setRoomIndex] = useState(0)
    const [chatInput, setChatInput] = useState("")

    const socket = socketIOClient(ENDPOINT);

    useEffect(() => {
        socket.on('connect', function (data) {
            socket.emit('admin-join', 'admin joining...')
        })
        socket.on('send-all-chat', (data)=>{
            setAllChatData(data)
        })
        socket.on("client-msg", function(data) {
            setAllChatData(data.allchat)
        })
    },[])

    const handleOnChange = (event) => {
        setChatInput(event.target.value)
    }

    const sendChatInput = (event) => {
        event.preventDefault();
        socket.emit('messageSend-admin', {
            chatInput: chatInput,
            roomId: roomId
        });
    }

    if (allChatData.length > 0) console.log(allChatData[roomIndex].chatContent)

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
                                    setChatContent(item.chatContent)
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
        // allChatData.map((item, index)=> {
        //     return (
        //         <div 
        //             key={index} className="flex"
        //             onClick={()=>{
        //                 setSessionId(item.sessionId)
        //                 console.log(item.sessionId)
        //                 socket.on('connect', function (data) {
        //                     socket.emit('sendRoomId', sessionId);
        //                 })
        //             }}
        //         >
        //             <p>{item.chatName}</p>
        //             <p>{item.chatEmail}</p>
        //             {/* {item.chatContent.map((item,index)=>{
        //                 return (
        //                     <div key={index}>
        //                         <p>{item.text}</p>
        //                         <p>{item.date}</p>
        //                     </div>
        //                 )
        //             })} */}
        //         </div>
        //     )
        // })
    )
}