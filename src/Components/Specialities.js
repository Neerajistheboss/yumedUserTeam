import React from 'react'
// import { Container, Row, Col } from 'reactstrap';
import { Col } from 'reactstrap'

const Specialities = (props) => {
	// const styles = {
	//     display: 'inline-block',
	//     marginRight: '16px',
	//     marginLeft: '20px',
	//     marginBottom: '10px',
	//     borderRadius: '10px',
	//     textAlign: 'center'
	// }

	const images = {
		height: '130px',
		textAlign: 'center',
		justifyContent: 'center',
	}

	return (
		<div name={props.name} style={{ padding: '16px', display: 'inline-block', color: 'rgb(71,123,117)', textAlign: 'center' }}>
			<div style={{ width: 'fit-content' }} name={props.name}>
				<img src={props.img} name={props.name} style={images} />
				<div>{props.spe}</div>
			</div>
		</div>
	)
}

export default Specialities
