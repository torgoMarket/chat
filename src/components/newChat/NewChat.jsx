import React, { useState } from 'react'
import styles from './NewChat.module.css'
import { useSelector } from 'react-redux'
import ChatItem from '../chatItem/ChatItem'

const NewChat = () => {

  const users = useSelector(state => state.users.users)
  const chats = useSelector(state => state.chats.chats)
  const authUser = useSelector(state => state.authUser.authUser)
  const [isActive, toggleActive] = useState(false)



  return (
    <div className={styles.newChat}>
        <button className={styles.button} onClick={() => toggleActive(!isActive)}>{isActive ? "Hide" : "Add Chat"}</button>
        <div className={`${styles.availableChatList} ${isActive ? styles.active : ''}`}>
          {users.map(userStore => (
            userStore.userName !== authUser.userName
              ? chats.map(chat => (
                  !chat.chatUsers.includes(userStore.userName)
                    ? <ChatItem key={userStore.id} userName={userStore.userName} user={userStore.userName} type="add"></ChatItem>
                    : console.log()
                ))
              : console.log()
          ))}
        </div>
    </div>
  )
}

export default NewChat