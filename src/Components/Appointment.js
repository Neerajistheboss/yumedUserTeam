import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Doctor from '../images/Doctor.png'
import Btn from './Button'
import TimeGroup from './TimeGroup'

const Appointment = (props) => {
	const locality = {
		color: 'rgb(150,150,150)',
		fontSize: '1.1em',
	}

	return (
		<Fragment>
			<Container style={{ paddingTop: '2%' }}>
				<Row style={{ marginBottom: '10px' }}>
					<Col xl='8' lg='8' md='8'></Col>
					<Col xl='4' lg='4' md='4'></Col>
				</Row>
				<Row>
					<Col xl='2' lg='2' md='2'>
						<img src={props.photo} alt='Doctor' width='100%' />
					</Col>
					<Col xl='6' lg='6' md='6'>
						<h2> Dr. {props.dName} </h2>
						<h5 className='d-inline-block mr-5'> {props.speciality} </h5>
						<p className='bg-success d-inline-block rounded p-1'>
							Fee {props.fee}
						</p>
						<div style={locality}>
							{props.locality}, {props.city}, {props.zCode}
						</div>
						<p>
							{props.avgReviews}({props.numberReviews})
						</p>
						<p> {props.description} </p>
						<p style={{ color: 'rgb(71,123,117)', textAlign: 'center' }}>
							View all Availability & emsp; & emsp; View Profile
						</p>
					</Col>
					<TimeGroup ts={props.timeSlots} />
				</Row>
			</Container>
			<hr />
		</Fragment>
	)
}

export default Appointment
