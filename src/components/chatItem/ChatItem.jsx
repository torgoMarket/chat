import React from 'react'
import styles from './ChatItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat, setChatUsers } from '../../store/chatSlice'

const ChatItem = ({userName, type, user}) => {

  const authUser = useSelector(state => state.authUser.authUser) 
  const dispatch = useDispatch()

  return (
    type === "add"
      ?    
        <div className={styles.chatItem} onClick={() => dispatch(addChat({chatUsers: [user, authUser.userName], messages: []}))}>
          <h4>{userName}</h4>
        </div>
      : 
        <div className={styles.chatItem} onClick={() => dispatch(setChatUsers([userName, authUser.userName]))}>
          <i className="fa-solid fa-trash" onClick={() => dispatch(deleteChat([authUser.userName, userName]))}></i>
          <h4>{userName}</h4> 
        </div>
  )
}


export default ChatItem