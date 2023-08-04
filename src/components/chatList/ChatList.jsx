import React from 'react'
import { useSelector } from 'react-redux'
import ChatItem from '../chatItem/ChatItem.jsx'
import NewChat from '../newChat/NewChat'
import styles from './ChatList.module.scss'

const ChatList = () => {
	const users = useSelector(state => state.users.users)
	const authUser = useSelector(state => state.authUser.authUser)
	const chats = useSelector(state => state.chats.chats)

	return (
		<div className={styles.chatList}>
			<NewChat></NewChat>
			{users.length === 1 ? (
				<h4 className={styles.listEmpty}>Chat List is empty</h4>
			) : (
				users.map(
					user =>
						user.userName !== authUser.userName &&
						chats.map(
							chat =>
								chat.chatUsers.includes(authUser.userName) &&
								chat.chatUsers.includes(user.userName) && (
									<ChatItem key={user.id} userName={user.userName}></ChatItem>
								)
						)
				)
			)}
		</div>
	)
}

export default ChatList
