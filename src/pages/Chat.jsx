import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ChatList from '../components/chatList/ChatList'
import Message from '../components/message/Message.jsx'
import AddMessage from '../components/newMessage/AddMessage'

const Chat = () => {
	const router = useNavigate()
	const chats = useSelector(state => state.chats.chats)
	const currentChatUsers = useSelector(state => state.chats.currentChatUsers)
	const [currentChat, setCurrentChat] = useState({})
	const authUser = useSelector(state => state.authUser.authUser)

	useEffect(() => {
		if (JSON.stringify(authUser) === '{}') {
			router('/')
		}
	}, [Chat])

	useEffect(() => {
		chats.map(chat =>
			chat.chatUsers.includes(currentChatUsers[0]) &&
			chat.chatUsers.includes(currentChatUsers[1])
				? setCurrentChat(chat)
				: console.log()
		)
	}, [currentChatUsers, chats])

	return (
		<div className='chatPage'>
			<ChatList></ChatList>
			<div className='chat'>
				<div className='messages'>
					{Array.isArray(currentChat.messages) &&
						currentChat.messages.map(message => (
							<Message message={message} key={message.id}></Message>
						))}
				</div>
				<AddMessage></AddMessage>
			</div>
		</div>
	)
}

export default Chat
