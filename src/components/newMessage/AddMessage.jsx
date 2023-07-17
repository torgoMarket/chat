import React, { useState } from 'react'
import styles from './AddMessage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../store/chatSlice'

const AddMessage = () => {

    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState('')
    const chats = useSelector(state => state.chats.chats)
    const chatUsers = useSelector(state => state.chats.currentChatUsers)
    const authUser = useSelector(state => state.authUser.authUser) 

    const addNewMessage = () => {
        chats.map(chat => (
            chat.chatUsers.includes(chatUsers[0]) && chat.chatUsers.includes(chatUsers[1])
            ? dispatch(addMessage({chatUsers: chatUsers, message: {id: Date.now(), sendedBy: authUser.userName, message: newMessage, sendedTime: Date.now()}}))
            : console.log()
        ))
    }

    return (
        <div className={styles.addMessage}>
            <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className={styles.addMessage__input}/>
            <button className={styles.addMessage__button} onClick={addNewMessage}><i className="fa-solid fa-caret-right"></i></button>  
        </div> 
    )
}    

export default AddMessage 