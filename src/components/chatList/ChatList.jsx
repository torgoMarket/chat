import React, { useEffect, useState } from 'react'
import styles from './ChatList.module.scss'
import ChatItem from '../chatItem/ChatItem.jsx'
import { useSelector } from 'react-redux'
import NewChat from '../newChat/NewChat'

const ChatList = () => {

  const users = useSelector(state => state.users.users) 
  const authUser = useSelector(state => state.authUser.authUser) 
  const chats = useSelector(state => state.chats.chats)
  
  return (
    <div className={styles.chatList}>
      <NewChat></NewChat>
      {users.length === 1
        ? <h4 className={styles.listEmpty}>Chat List is empty</h4>
        : users.map(user => (
            user.userName !== authUser.userName
              ? chats.map(chat => (
                chat.chatUsers.includes(authUser.userName) && chat.chatUsers.includes(user.userName)
                ? <ChatItem key={user.id} userName={user.userName}></ChatItem>
                : console.log() 
              ))
              : console.log()
          ))
      }

    </div>
  )
}

export default ChatList