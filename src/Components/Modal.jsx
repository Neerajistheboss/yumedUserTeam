import React from 'react'
import './Modal.css'

const Modal = (props) => {
	return (
		<div className='d-flex modalclass text-center flex-column bg-white border shadow rounded  p-1'>
			<div className='py-2 text-light' >YuMedic</div>
			<div className='py-5'>
				<p>Do you want to Logout</p>
			</div>
			<div className='d-flex justify-content-end'>
				<button className='mx-3 p-2 rounded border-0' onClick={props.onCancel}>
					Cancel
				</button>
				<button className='mx-1 p-2 rounded bg-danger text-white border-0' onClick={props.onLogout}>
					Logout
				</button>
			</div>
		</div>
	)
}
export default Modal
