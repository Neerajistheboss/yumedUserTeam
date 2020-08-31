import React from 'react'
import { Container, Col, Row, Button } from 'reactstrap'
import MobileStoreButton from 'react-mobile-store-button'
import moment from 'moment'
const footer = () => {
	const buttons = {
		height: '50px',
	}

	const list = {
		listStyle: 'none',
	}

	const style = {
		color: 'white',
		backgroundColor: 'rgb(0,19,51)',
		paddingTop: '30px',
	}

	const playstoreLink =
		'https://play.google.com/store/apps/details?id=io.yu.medic&hl=en_IN'

	return (
		<div style={style}>
			<Container>
				<Row>
					<Col className='p-0'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>YuMedic</h5>
							</li>
							<li>Home</li>
							<li>About Us</li>
							<li>Careers</li>
							<li>Contact Us</li>
							<li>Help</li>
						</ul>
					</Col>
					<Col className='p-0'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>Top Specialities</h5>
							</li>
							<li>General Physician</li>
							<li>Cardiology</li>
							<li>Child Specialities</li>
							<li>Surgeon</li>
							<li>Dental</li>
							<li>Neurology</li>
							<li>View All</li>
						</ul>
					</Col>
					<Col className='p-0'>
						<ul style={list}>
							<li>
								<h5 style={{ fontWeight: 'bold' }}>Get On Board</h5>
							</li>
							<li>I am a Doctor</li>
							<li>We are a Hospital</li>
							<li className='d-none d-lg-block'>
								<MobileStoreButton
									store='android'
									url={playstoreLink}
									linkProps={{ title: 'Android Store Button' }}
									style={buttons}
								/>
							</li>
							<li className='d-none d-lg-block'>
								<input
									type='number'
									placeholder='+91 9999999999'
									style={{ borderRadius: '4px' }}
									className='inputField'
								/>{' '}
								<Button style={{ height: '34px' }} className='inputButton'>
									Send
								</Button>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div
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
			</div>
		</div>
	)
}

export default footer
