import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

function Chat() {

    const [chatData, setChatData] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const socket = socketIOClient(ENDPOINT);
    useEffect(() => {
        socket.on('connect', function (data) {
            socket.emit('join', 'Hello server from client');
        });
        socket.on('thread', (data)=> {
            setChatData(chatData => [...chatData, data])
        })
    }, [chatData, socket])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        socket.emit('mess', inputValue);
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    if (chatData.length) console.log('zxc', chatData)
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}></input>
                <button>Chat</button>
            </form>
            <ul>
                {
                    chatData.map((item, index)=>{
                        return(
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Chat;