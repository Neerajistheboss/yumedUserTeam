import React from 'react'
const TimeSlot = (props) => {
	const timeSelected = () => {
		console.log(props.time)
	}
	return <div onClick={timeSelected}>{props.time}</div>
}

export default TimeSlot
