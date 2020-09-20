import React from 'react'
import SubmitBtn from '../Components/submitBtn'
import { NavLink } from 'react-router-dom'
import Doctor from '../Components/Doctor'
import Download from '../Components/Download'
import './RegisterPage.css'

class RegisterPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { name: '', email: '', phone: '', password: '' }
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handlePhoneChange = this.handlePhoneChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value })
	}
	handleEmailChange(event) {
		this.setState({ email: event.target.value })
	}
	handlePhoneChange(event) {
		this.setState({ phone: event.target.value })
	}
	handlePasswordChange(event) {
		this.setState({ password: event.target.value })
	}

	render() {
		return (
			<div>
				<div className='container-fluid login'>
					<div className='row'>
						<div className=' mx-auto'>
							<div id='first'>
								<div className='myform form '>
									<div className='logo mb-3'>
										<div className='col-md-12 text-center'>
											<h1>SignUp</h1>
										</div>
									</div>
									<div name='register' className="reg">
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Name:</label>
											<input
												value={this.state.name}
												onChange={this.handleNameChange}
												type='text'
												name='name'
												className='form-control'
												id='name'
												aria-describedby='nameHelp'
												placeholder='Enter name'
												required ></input>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Email address:</label>
											<input
												value={this.state.email}
												onChange={this.handleEmailChange}
												type='email'
												name='email'
												className='form-control'
												id='email'
												aria-describedby='emailHelp'
												placeholder='Enter email'
												required ></input>
										</div>

										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Phone:</label>
											<input
												value={this.state.phone}
												onChange={this.handlePhoneChange}
												type='text'
												name='phone'
												className='form-control'
												id='phone'
												aria-describedby='emailHelp'
												placeholder='Enter Phone Number'
												required ></input>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>Password:</label>
											<input
												value={this.state.password}
												onChange={this.handlePasswordChange}
												type='password'
												name='password'
												id='password'
												className='form-control'
												aria-describedby='emailHelp'
												placeholder='Enter Password'
												required ></input>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>If Refferal Code:</label>
											<input
												// value={this.state.name}
												// onChange={this.handleNameChange}
												type='text'
												// name='name'
												className='form-control'
												// id='name'
												// aria-describedby='nameHelp'
												placeholder='Enter Code' ></input>
										</div>
										<div className='form-group'>
											<p>
												By signing up you accept our{' '}
												<a href='#'>Terms Of Use</a>
											</p>
										</div>
										<div className='reg_btn text-center '>
											<SubmitBtn
												fun='register'
												className=' btn btn-block mybtn btn-primary tx-tfm'
												text='Register'
												name={this.state.name}
												email={this.state.email}
												phone={this.state.phone}
												password={this.state.password}
											/>
										</div>
										<div className='col-md-12 '>
											<div className='login-or text-center'>
												<hr className='hr-or'></hr>
												<span className='span-or text-center font-weight-bold'>OR</span>
											</div>
										</div>
										<div className='col-md-12 mb-3'>
											<p className='text-center'></p>
										</div>
										<div className='form-group'>
											<p className='text-center'>
												Already have account?{' '}
												<NavLink to='/login' id='login'>
													Login here
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
			</div>
		)
	}
}

export default RegisterPage
