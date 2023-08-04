import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../store/chatSlice'
import styles from './AddMessage.module.scss'

const AddMessage = () => {
	const date = new Date()
	const dispatch = useDispatch()
	const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false)
	const [newMessage, setNewMessage] = useState('')
	const chats = useSelector(state => state.chats.chats)
	const chatUsers = useSelector(state => state.chats.currentChatUsers)
	const authUser = useSelector(state => state.authUser.authUser)

	const addNewMessage = () => {
		chats.map(chat =>
			chat.chatUsers.includes(chatUsers[0]) &&
			chat.chatUsers.includes(chatUsers[1])
				? dispatch(
						addMessage({
							chatUsers: chatUsers,
							message: {
								id: Date.now(),
								sendedBy: authUser.userName,
								message: newMessage,
								sendedTime: `${date.getHours()}:${date.getMinutes()}`,
							},
						})
				  )
				: console.log()
		)
		setNewMessage('')
	}

	return (
		<div
			className={styles.addMessage}
			onKeyDown={e => {
				if (e.code === 'Enter') {
					addNewMessage()
				}
			}}
		>
			<textarea
				type='text'
				value={newMessage}
				onChange={e => setNewMessage(e.target.value)}
				className={styles.input}
			/>

			<button
				className={styles.smile}
				onClick={() => {
					isEmojiPickerVisible
						? setEmojiPickerVisible(false)
						: setEmojiPickerVisible(true)
				}}
			>
				<i className='fa-regular fa-face-smile'></i>
			</button>
			<button className={styles.sendMessage} onClick={addNewMessage}>
				<i className='fa-solid fa-paper-plane'></i>
			</button>

			<div
				className={`${styles.emojis} ${
					isEmojiPickerVisible ? styles.active : ''
				}`}
			>
				<EmojiPicker
					onEmojiClick={emoji => setNewMessage(newMessage + emoji.emoji)}
					width='100%'
					height='100%'
					theme='dark'
				/>
			</div>
		</div>
	)
}

export default AddMessage
