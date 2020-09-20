import React from 'react'

const Testimonial = (props) => {
	return (

		<div className='d-flex col-sm-6  px-3'>
			<img src={props.image} style={{ width: '100px', borderRadius: '50%' }} />
			<div>
				<p className="text-center">{props.testimony}</p>
				<p style={{ fontWeight: 'bold', display: 'block' }}>{props.name}</p>
			</div>
		</div>

	)
}
export default Testimonial
