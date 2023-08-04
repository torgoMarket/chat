import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import formImage from '../../images/formImage.jpg'
import { setAuthUser } from '../../store/authUserSlice'
import { addUser } from '../../store/usersSlice'
import styles from './Form.module.scss'

const Form = () => {
	const router = useNavigate()
	const dispatch = useDispatch()
	const users = useSelector(state => state.users.users)
	const [userName, setUserName] = useState('Amir')
	const [password, setPassword] = useState('hello')

	const handleSubmit = e => {
		e.preventDefault()
		const user = {
			id: Date.now(),
			userName,
			password,
		}

		const validate = status => {
			if (status === 'pass') {
				dispatch(setAuthUser(user))
				setUserName('')
				setPassword('')
				router('/chat')
			} else if (status === 'incorrectPassword') {
				alert('incorrect Password')
				setPassword('')
			} else {
				dispatch(addUser(user))
				dispatch(setAuthUser(user))
			}
		}

		users.map(userStore =>
			user.userName !== '' && user.password !== ''
				? userStore.userName === user.userName
					? userStore.password === user.password
						? validate('pass')
						: validate('incorrectPassword')
					: console.log()
				: alert('fill all fields')
		)
	}

	return (
		<div className={styles.form}>
			<div className={styles.image}>
				<img src={formImage} alt='time image' />
			</div>
			<form onSubmit={handleSubmit}>
				<h3>Sign Up/ Login</h3>
				<input
					placeholder='userName'
					className={styles.input}
					type='text'
					value={userName}
					onChange={e => setUserName(e.target.value)}
				/>
				<input
					placeholder='password'
					className={styles.input}
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button className={styles.button} type='submit'>
					login
				</button>
			</form>
		</div>
	)
}

export default Form
