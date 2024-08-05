import React from 'react'

const Hospitals = (props) => {
	const style = {
		// display: 'inline-block',
		// marginLeft: '16px',
		// marginRight: '20px',
		// textAlign: 'center',
		margin: '0.5rem 0.5rem',
		padding: '0rem',
	}

	const images = {
		height: '150px',
		border: '2px solid #DAE0E2',
		borderRadius: '1rem',
		width: '150px',
		padding: '0.5rem',
		boxShadow: '0 0 5px #b2bec3',
	}

	return (
		<div style={style} id={props.id}>
			<img
				src={props.img}
				alt={props.name}
				id={props.id}
				className
				style={images}
			/>
			<div id={props.id} >{props.name}</div>
		</div>
	)
}

export default Hospitals
