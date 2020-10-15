import React, { useState } from 'react'

export const ChatContext = React.createContext();

export function ChatProvider(props) {
    
    const [chatData ,setChatData] = useState({})

    const setChatDataFunc = (chat) => {
        setChatData(Object.assign(chat, chatData));
    };

    return (
        <ChatContext.Provider
            value={{
                chatData: chatData,
                setChatDataFunc: setChatDataFunc
            }}
        >
            {props.children}
        </ChatContext.Provider>
    )
}