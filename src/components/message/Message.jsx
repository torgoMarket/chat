import React, { useEffect, useState } from 'react'
import styles from './Messages.module.css'
import { useSelector } from 'react-redux'

const Message = ({message}) => {

    const [isOwnMessage, setIsOwnMessage] = useState(false)
    const authUser = useSelector(state => state.authUser.authUser) 

    useEffect(() => {
        message.sendedBy == authUser.userName
        ? setIsOwnMessage(true)
        : setIsOwnMessage(false)
    }, [message.sendedBy])

    return (
        <div className={`${styles.message} ${isOwnMessage ? styles.ownMessage : styles.incomingMessage}`}>
            <h4 className={styles.author}>{message.sendedBy}</h4>
            <p className={styles.text}>{message.message}</p>
            <span className={styles.time}>{message.sendedTime}</span> 
        </div>
    )
}

export default Message