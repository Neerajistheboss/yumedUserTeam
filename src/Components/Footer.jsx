import React, { useContext } from 'react'
import { Container, Col, Row, Button } from 'reactstrap'
import MobileStoreButton from 'react-mobile-store-button'
import moment from 'moment'
import { AuthContext } from '../context/auth-context'
import Social from '../Components/Social'
import './Footer.css'

import { NavLink } from 'react-router-dom'
const Footer = () => {
	const auth = useContext(AuthContext)


	let searchFilter = JSON.parse(localStorage.getItem("filter"))
	if (searchFilter == null)
		searchFilter = {}


	const setSpecialisation = (event) => {
		console.log("setSpecialisation clicked ****************************************")
		console.log(event.target.name)
		auth.setValueFunc("specialisation", event.target.name)
		auth.setValueFunc("hospitalId", null)
		searchFilter.hospitalId = null
		searchFilter.specialisation = event.target.name
		localStorage.setItem('filter', JSON.stringify(searchFilter))
		auth.setValues({ ...auth.values, filter: searchFilter })
	}


	const buttons = {
		height: '50px',
	}

	const list = {
		listStyle: 'none',
	}

	const style = {
		color: 'white',
		backgroundColor: '#970C34',
		paddingTop: '30px',
		paddingLeft: '10px',
		width: '100%'
	}


	const playstoreLink =
		'https://play.google.com/store/apps/details?id=io.yu.medic&hl=en_IN'

	return (
		<div style={style}>
			<Container className="footer">
				<Row>
					<Col className='p-1'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>YuMedic</h5>
							</li>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink to='/about'>About Us</NavLink>
							</li>

							<li>
								<NavLink to='/contact'>Contact Us</NavLink>
							</li>
							<li>
								{/* <NavItem> */}
								<NavLink
									to='/faqs'>
									FAQs
								</NavLink>
								{/* </NavItem> */}
							</li>
							<li>
								{/* <NavItem> */}
								<NavLink
									to='/refunds' >
									Refunds & Cancellations
								</NavLink>
								{/* </NavItem> */}
							</li>
						</ul>
					</Col>
					<Col className='p-1'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>Top Specialities</h5>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='General Physician'>
									General Physician
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='Cardiology'>
									Cardiology
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='Child Specialist'>
									Child Specialities
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='General Surgeon'>
									Surgeon
								</NavLink>
							</li>
							<li>
								<NavLink to='/search' onClick={setSpecialisation} name='Dental'>
									Dental
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/search'
									onClick={setSpecialisation}
									name='Gynaecologist'>
									Gynaecologist
								</NavLink>
							</li>
						</ul>
					</Col>
					<Col className='p-1'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>Get On Board</h5>
							</li>
							<li>I am a Doctor</li>
							<li>We are a Hospital</li>

							<li className='d-none d-lg-block mt-2 mb-2'>
								<h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Download our App</h2>
								<MobileStoreButton
									store='android'
									url={playstoreLink}
									linkProps={{ title: 'Android Store Button' }}
									style={buttons}
								/>
							</li>

							{/* <li className='d-none d-lg-block'>
								<input
									type='number'
									placeholder='+91 9999999999'
									className='inputField'
									style={{ height: '2.5rem', border: 'none', borderRadius: '0.5rem' }}
								/>{' '}
								{/* <Button style={{ height: '34px' }} className='inputButton'>
									Send
								</Button> 

								<Button className='inputButton bg-dark'>
									Send
									</Button>
							</li> */}
						</ul>
					</Col>
				</Row>
			</Container>
			<Social />

			{/* <div
				style={{
					backgroundColor: 'black',
					color: 'white',
					textAlign: 'center',
					height: '52px',
				}}>
				Copyright YuMedic 2020
			</div>
			<div>
				<a href='https://www.facebook.com/yumedic1/'>
					<i class='fab fa-facebook'></i>
				</a>
			</div> */}
		</div>
	)
}

export default Footer
