import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMessage } from '../../store/chatSlice'
import styles from './Messages.module.scss'

const Message = ({ message }) => {
	const dispatch = useDispatch()
	const [isOwnMessage, setIsOwnMessage] = useState(false)
	const authUser = useSelector(state => state.authUser.authUser)
	const currentChatUsers = useSelector(state => state.chats.currentChatUsers)

	useEffect(() => {
		message.sendedBy === authUser.userName
			? setIsOwnMessage(true)
			: setIsOwnMessage(false)
	}, [message.sendedBy, authUser.userName])

	return (
		<div
			className={`${styles.message} ${
				isOwnMessage ? styles.ownMessage : styles.incomingMessage
			}`}
		>
			{isOwnMessage && (
				<i
					className='fa-solid fa-trash'
					onClick={() =>
						dispatch(
							deleteMessage({
								currentChatUsers: currentChatUsers,
								message: message,
							})
						)
					}
				></i>
			)}
			<h4 className={styles.author}>{message.sendedBy}</h4>
			<p className={styles.text}>{message.message}</p>
			<span className={styles.time}>{message.sendedTime}</span>
		</div>
	)
}

export default Message
