import React from 'react'

const Hospitals = (props) => {
	const style = {
		display: 'inline-block',
		marginLeft: '16px',
		marginRight: '20px',
		textAlign: 'center',
	}

	const images = {
		height: '150px',
	}

	return (
		<div style={style}>
			<img src={props.img} alt={props.name} className style={images} />
			<div>{props.name}</div>
		</div>
	)
}

export default Hospitals
