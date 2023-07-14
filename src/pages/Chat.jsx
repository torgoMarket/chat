import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Message from '../components/message/Message'
import AddMessage from '../components/newMessage/AddMessage'
import ChatList from '../components/chatList/ChatList'

const Chat = () => {

  const chats = useSelector(state => state.chats.chats)
  const chatUsers = useSelector(state => state.chats.currentChatUsers)

  const [currentChat, setCurrentChat] = useState({})

  useEffect(() => {
    {chats.map(chat => (
      console.log(chatUsers, chat.chatUsers),
      chat.chatUsers.includes(chatUsers[0]) && chat.chatUsers.includes(chatUsers[1])
        ? setCurrentChat(chat)
        : console.log()
    ))} 
  }, [chatUsers])

  return (
    <div className="chatPage">
      <ChatList></ChatList>
      <div className="chat">
        <div className="messages">
          {Array.isArray(currentChat.messages)
          ?
            currentChat.messages.map(message => (
              <Message message={message}></Message>
            ))
          : console.log()
          }
        </div>
        <AddMessage ></AddMessage>
      </div>
    </div>
  )
}

export default Chat 