import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'

const axios = require('axios')

function SubmitBtn(props) {
	let history = useHistory()
	const auth = useContext(AuthContext)

	function login() {
		axios
			.post('http://localhost:5000/api/v1/auth/login', {
				email: props.email,
				password: props.password,
			})
			.then(function (response) {
				console.log(response.data.success)
				if (!response.data.success) {
					//do nothing
				} else {
					//save token in local storage
					let token = response.data.token
					let uid = response.data.userId
					localStorage.setItem('token', token)
					localStorage.setItem('uid', uid)

					//         //load homepage
					auth.login(uid, token)
					history.push('/')
				}
			})
	}

	function register() {
		// console.log("register")

		axios
			.post('http://localhost:8080/api/v1/auth/register', {
				name: props.name,
				email: props.email,
				password: props.password,
				phone: props.phone,
				role: 'user',
			})
			.then(function (response) {
				console.log(response.data.success)
				if (!response.data.success) {
					//do nothing
				} else {
					//save token in local storage
					let token = response.data.token
					let uid = response.data.userId
					localStorage.setItem('token', token)
					localStorage.setItem('uid', uid)

					//         //load homepage
					auth.login(uid, token)
					history.push('/')
				}
			})
	}

	function payment() {
		console.log('payment started')
		const config = {
			headers: { Authorization: `Bearer ${auth.token}` },
		}
		axios
			.post(
				'http://localhost:5000/api/v1/appointments',
				{
					appointment: {
						user: auth.userId,
						doctor: '5ed4d26c7004f434b8f8d34e',
						hospital: '5ed4d26c7004f434b8f8d34e',
						cost: 300,
					},
				},
				config
			)
			.then(function (response) {
				console.log(response.data)
				if (!response.data.success) {
					//do nothing
				} else {
					let orderId = response.data.orderId

					//         //load payment gateway

					window.location.href = `//localhost:5000/api/v1/payment/${orderId}`
				}
			})
	}

	let funcall
	if (props.fun == 'register') funcall = register
	if (props.fun == 'login') funcall = login
	if (props.fun == 'payment') funcall = payment

	return (
		<button
			className={`${props.className}  btn btn-inline-block shadow`}
			onClick={funcall}>
			{props.text}
		</button>
	)
}

export default SubmitBtn
