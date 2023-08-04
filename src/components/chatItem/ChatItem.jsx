import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat, setChatUsers } from '../../store/chatSlice'
import styles from './ChatItem.module.scss'

const ChatItem = ({ userName, type, user }) => {
	const [isCurrentChat, setCurrentChat] = useState(false)
	const authUser = useSelector(state => state.authUser.authUser)
	const dispatch = useDispatch()

	return type === 'add' ? (
		<div
			className={`${styles.chatItem} ${styles.chatItemAdd}`}
			onClick={() =>
				dispatch(
					addChat({
						chatUsers: [user.userName, authUser.userName],
						messages: [],
					})
				)
			}
		>
			<h4>{userName}</h4>
		</div>
	) : (
		<div
			className={`${styles.chatItem} ${isCurrentChat && styles.currentChat}`}
			onClick={() => {
				dispatch(setChatUsers([userName, authUser.userName]))
				setCurrentChat(!isCurrentChat)
			}}
		>
			<i
				className='fa-solid fa-trash'
				onClick={() => dispatch(deleteChat([authUser.userName, userName]))}
			></i>
			<h4>{userName}</h4>
		</div>
	)
}

export default ChatItem
