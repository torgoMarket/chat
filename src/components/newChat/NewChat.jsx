import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatItem from '../chatItem/ChatItem.jsx'
import styles from './NewChat.module.scss'

const NewChat = () => {
	const users = useSelector(state => state.users.users)
	const chats = useSelector(state => state.chats.chats)
	const authUser = useSelector(state => state.authUser.authUser)
	const [isActive, toggleActive] = useState(false)
	const [userChat, setUserChat] = useState([])

	const setAvailableChats = () => {
		toggleActive(!isActive)
	}

	useEffect(() => {
		toggleActive(false)
		setUserChat([...users])
		users.map(user =>
			chats.map(chat =>
				chat.chatUsers.includes(authUser.userName) &&
				chat.chatUsers.includes(user.userName)
					? setUserChat(current =>
							current.filter(userC => {
								return (
									userC.userName !== user.userName &&
									userC.userName != authUser.userName
								)
							})
					  )
					: chat
			)
		)
	}, [chats])

	return (
		<div className={styles.newChat}>
			<button
				className={`${styles.button} ${isActive && styles.hide}`}
				onClick={() => setAvailableChats()}
			>
				{isActive ? 'Hide ' : 'Add Chat '} <i className='fa-solid fa-plus'></i>{' '}
			</button>
			<div
				className={`${styles.availableChatList} ${isActive && styles.active}`}
			>
				{userChat.map(userC => (
					<ChatItem
						userName={userC.userName}
						type='add'
						user={userC}
						key={userC.id}
					></ChatItem>
				))}
			</div>
		</div>
	)
}

export default NewChat
