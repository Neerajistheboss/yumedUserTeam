import React from 'react'
// import { Container, Row, Col } from 'reactstrap';
import { Col } from 'reactstrap'

const Specialities = (props) => {

	const images = {
		height: '130px',
		textAlign: 'center',
		justifyContent: 'center',
	}

	return (
		<div name={props.name} style={{ padding: '16px', margin: '16px', display: 'inline-block', textAlign: 'center' }}>
			<div style={{ width: 'fit-content' }} name={props.name}>
				<img src={props.img} name={props.name} style={images} />
				<div style={{ color: "#191716", fontWeight: 'lighter' }}>{props.spe}</div>
			</div>
		</div>
	)
}

export default Specialities
