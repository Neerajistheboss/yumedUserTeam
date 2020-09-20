import React, { useState, useContext } from 'react'
import SubmitBtn from '../Components/submitBtn'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { AuthContext } from '../context/auth-context'
import { useHistory } from 'react-router-dom'
import Doctor from '../Components/Doctor'
import Download from '../Components/Download'
import './Login.css'


const LoginPage = (props) => {
	const auth = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}
	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

	// function googleLogin() {
	// 	axios
	// 		.get('https://yuver.herokuapp.com/api/v1/auth/oauth/google')
	// 		.then(function (response) {
	// 			console.log(response.data.success)
	// 			if (!response.data.success) {
	// 				//do nothing
	// 			} else {
	// 				//save token in local storage
	// 				let token = response.data.token
	// 				let uid = response.data.userId
	// 				localStorage.setItem('token', token)
	// 				localStorage.setItem('uid', uid)

	// 				//         //load homepage
	// 				auth.login(uid, token)
	// 				window.history.push('/')
	// 			}
	// 		})
	// }

	return (
		<>
			<div className='container-fluid login'>
				<div className='row'>
					<div className=' mx-auto'>
						<div id='first'>
							<div className='myform form '>
								<div className='logo mb-3'>
									<div className='col-md-12 text-center'>
										<h1>Login</h1>
									</div>
								</div>

								<div className=' '>
									<div className='login-or'>
										{/* <hr className='hr-or'></hr> */}
										{/* Login with facebook and google */}

										<a
											href='http://13.233.58.33:5000/api/v1/auth/oauth/google'
											className='p-1 rounded-lg d-flex my-2 text-light'
											style={{
												backgroundColor: '#4267B2',
												display: 'inline-block ',
												width: '350px',
												height: '45px',
											}}>
											<img src='facebook.png' style={{ width: '50px' }} />
											<p className='d-inline-block m-0 align-self-center pl-1'>
												Login with Facebook
												</p>
										</a>
										<a
											href='http://13.233.58.33:5000/api/v1/auth/oauth/google'
											className='p-1 rounded-lg d-flex  my-2 text-light'
											style={{
												backgroundColor: '#1976D2',
												display: 'inline-block ',
												width: '350px',
												height: '45px',
											}}>
											<img src='google.png' style={{ width: '25px', margin: '0.3rem 0.8rem', height: '28px' }} />
											<p className='d-inline-block m-0 align-self-center pl-1'>
												Login with Google
												</p>
										</a>

										<div className='span-or text-center font-weight-bold'>OR</div>

									</div>
								</div>

								<div name='register'>
									<div className='form-group' style={{ width: '350px' }}>
										<label htmlFor='exampleInputEmail1'>Email address:</label>
										<input
											value={email}
											onChange={handleEmailChange}
											type='email'
											name='email'
											className='form-control'
											id='email'
											aria-describedby='emailHelp'
											placeholder='Enter email' required></input>
									</div>
									<div className='form-group' style={{ width: '350px' }}>
										<label htmlFor='exampleInputEmail1'>Password:</label>
										<input
											value={password}
											onChange={handlePasswordChange}
											type='password'
											name='password'
											id='password'
											className='form-control'
											aria-describedby='emailHelp'
											placeholder='Enter Password' required></input>
									</div>
									<div className='form-group' style={{ width: '350px' }}>
										<p className='text-center'>
											By signing up you accept our <a href='#'>Terms Of Use</a>
										</p>
									</div>
									<div className=' text-center login_btn '>
										<SubmitBtn
											style={{ width: '350px' }}
											fun='login'
											className=' btn btn-block mybtn btn-primary tx-tfm'
											text='Login'
											email={email}
											password={password}
										/>
									</div>


									<div className='form-group mt-4'>
										<p className='text-center'>
											New Here?{' '}
											<NavLink to='/register' id='login'>
												SignUp here
													</NavLink>
										</p>
									</div>
									<div className='form-group mt-4'>
										<p className='text-center'>
											{/* Forgot Password?{' '} */}
											<NavLink to='/forgotPassword' id='login'>
												Forgot Password?
													</NavLink>
										</p>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Doctor />
			<Download />
		</>
	)
}

export default LoginPage
