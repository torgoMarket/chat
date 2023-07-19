import React, { useState } from 'react'
import styles from './AddMessage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../store/chatSlice'

const AddMessage = () => {

    const date = new Date()
    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState('')
    const chats = useSelector(state => state.chats.chats)
    const chatUsers = useSelector(state => state.chats.currentChatUsers)
    const authUser = useSelector(state => state.authUser.authUser) 

    const addNewMessage = () => {
        chats.map(chat => (
            chat.chatUsers.includes(chatUsers[0]) && chat.chatUsers.includes(chatUsers[1])
            ? dispatch(addMessage({chatUsers: chatUsers, message: {id: Date.now(), sendedBy: authUser.userName, message: newMessage, sendedTime: `${date.getHours()}:${date.getMinutes()}`}}))
            : console.log()
        ))
    }

    return (
        <div className={styles.addMessage}>
            <textarea type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className={styles.input}/>
            <button className={styles.button} onClick={addNewMessage}><i className="fa-solid fa-paper-plane"></i></button>  
        </div> 
    )
}    

export default AddMessage 