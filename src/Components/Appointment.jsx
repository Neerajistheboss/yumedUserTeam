import React, { useState, useEffect } from 'react'
import moment from 'moment'
const Appointment = (props) => {
	const [status, setStatus] = useState(null)
	const [color, setColor] = useState(null)
	const [bg, setBg] = useState('#C4FFF8')
	const isAfter = moment(
		`${props.appointment.dateTime.date} ${props.appointment.dateTime.time}`
	).isAfter(moment())
	useEffect(() => {
		if (props.appointment.status == "awaitingPayment") {
			setStatus('AwaitingPayment')
			setColor('bg-warning')
		} else if (props.appointment.status == 'confirmed') {
			setStatus('Confirmed')
			setColor('bg-success')
		} else {
			setStatus('Failed')
			setColor('bg-danger')
		}




		if (!isAfter) {
			setBg('#d3d3d3')
		}

	}, [props])

	return (
		<div
			className=' rounded d-flex  justify-content-around m-3'
			style={{ backgroundColor: bg, minHeight: '100px' }}>
			<div className='rounded-circle bg-dark align-self-center '>
				<img style={{ height: '100px' }} src={props.appointment.doctor.photo} />
			</div>
			<div className='d-flex flex-column justify-content-around'>
				<h5 className='d-inline-block m-0'>{props.appointment.doctor.name}</h5>
				<h6 className='d-inline-block m-0'>{props.appointment.speciality}</h6>
				<h6 className='d-inline-block m-0'>
					{props.appointment.hospital.name}
				</h6>

				<React.Fragment>
					{isAfter && (
						<h6 className={`${color} p-1 rounded`}>Status:{status}</h6>
					)}
					<h6 className='my-1 m-0'>
						{moment(
							`${props.appointment.dateTime.date} ${props.appointment.dateTime.time}`
						).calendar()}
					</h6>
				</React.Fragment>

				{/* <h6 className=''>{moment(props.appointment.time).format('LT')}</h6> */}
			</div>
			<div className='d-flex flex-column justify-content-around '>
				{props.appointment.status == 'cancelled' && (
					<button className='btn rounded btn-danger m-0'>Failed</button>
				)}
			</div>
		</div>
	)
}

export default Appointment
