import React from 'react'
import moment from 'moment'
const Appointment = (props) => {
	return (
		<div
			className=' rounded d-flex  justify-content-around m-3'
			style={{ backgroundColor: '#C4FFF8', minHeight: '100px' }}>
			<div className='rounded-circle bg-dark align-self-center '>
				<img style={{ height: '100px' }} src={props.appointment.doctor.photo} />
			</div>
			<div className='d-flex flex-column justify-content-around'>
				<h5 className='d-inline-block m-0'>{props.appointment.doctor.name}</h5>
				<h6 className='d-inline-block m-0'>{props.appointment.speciality}</h6>
				<h6 className='d-inline-block m-0'>
					{props.appointment.hospital.name}
				</h6>
				{props.appointment.status != 'awaitingPayment' ? (
					<React.Fragment>
						<h6 className='bg-warning p-1 rounded'>
							Status:{props.appointment.status}
						</h6>
						<h6 className='my-1 m-0'>
							{moment(
								`${props.appointment.dateTime.date} ${props.appointment.dateTime.time}`
							).calendar()}
						</h6>
					</React.Fragment>
				) : (
					<h6 className='bg-danger p-1 rounded'>Status:{'Payment Declined'}</h6>
				)}

				{/* <h6 className=''>{moment(props.appointment.time).format('LT')}</h6> */}
			</div>
			<div className='d-flex flex-column justify-content-around '>
				{props.appointment.status === 'confirmed' ? (
					<React.Fragment>
						<button className='btn rounded btn-danger m-0'>Cancel</button>
						<button className='btn rounded btn-primary m-0'>Reschedule</button>
					</React.Fragment>
				) : (
					<button className='btn rounded btn-danger m-0'>Failed</button>
				)}
			</div>
		</div>
	)
}

export default Appointment
