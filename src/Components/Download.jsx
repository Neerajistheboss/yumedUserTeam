import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import MobileStoreButton from 'react-mobile-store-button'

import Mobile from '../images/App Reprsentation.png'

const Download = () => {
	const androidUrl =
		'https://play.google.com/store/apps/details?id=io.yu.medic&hl=en_IN'

	return (
		<Container fluid={true} style={{ backgroundColor: 'skyBlue' }}>
			<Row style={{ paddingTop: '32px', paddingBottom: '32px' }}>
				<Col xl='6' lg='6' md='6' style={{ textAlign: 'center' }}>
					<img src={Mobile} alt='Mobile Device' style={{ height: '350px' }} />
				</Col>
				<Col xl='6' lg='6' md='6 ' className='d-flex align-items-center'>
					<Container>
						<h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Download our App</h1>
						<ul style={{ fontSize: '1.3rem' }}>
							<li>Get information about various health issues</li>
							<li>Scroll through all reputed doctors in your area</li>
							<li>Get appointments with absolute ease</li>
						</ul>
						{/* <MobileStoreButton
							store="ios"
							url={androidUrl}
							linkProps={{ title: 'iOS Store Button' }}
						/> */}
						<MobileStoreButton
							store='android'
							url={androidUrl}
							linkProps={{ title: 'Android Store Button' }}
						/>

						{/* <li className='d-none d-lg-block form-inline'>
							<input
								type='number'
								placeholder='+91 9999999999'
								className='inputField'
								style={{ height: '2.5rem', border: 'none', borderRadius: '0.5rem' }}
							/>{' '}
							{/* <Button style={{ height: '34px', paddingBottom: '1rem' }} className='inputButton'>
								Send
								</Button> *
							<Button style={{ backgroundColor: '#1B1B30' }} className='inputButton'>Send</Button>
						</li> */}

						<br />
						{/* <input
							type='number'
							placeholder='+91 9999999999'
							style={{ borderRadius: '5px' }}
						/> */}
						{/* <Button
							style={{
								marginLeft: '10px',
								backgroundColor: 'black',
								height: '34px',
							}}>
							Send Link
						</Button> */}
					</Container>
				</Col>
			</Row>
		</Container>
	)
}

export default Download
